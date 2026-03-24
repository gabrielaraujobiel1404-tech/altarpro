import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LightningIcon, TimerIcon } from "@/components/CustomIcons";

export const StickyBottomCTA = () => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-foreground/95 backdrop-blur-md border-t-2 border-coral px-4 py-3">
        <div className="container mx-auto flex items-center justify-between gap-4 max-w-5xl">
          {/* Timer */}
          <div className="flex items-center gap-2 text-primary-foreground">
            <TimerIcon className="w-5 h-5 text-coral animate-pulse hidden sm:block" />
            <span className="text-xs sm:text-sm font-bold text-coral uppercase tracking-wide hidden md:inline">
              Oferta expira em:
            </span>
            <div className="flex items-center gap-1 font-bold text-lg sm:text-xl">
              <span className="bg-coral/20 text-coral px-2 py-0.5 rounded-lg">{pad(time.minutes)}</span>
              <span className="text-coral animate-pulse">:</span>
              <span className="bg-coral/20 text-coral px-2 py-0.5 rounded-lg">{pad(time.seconds)}</span>
            </div>
          </div>

          {/* Urgency text - hidden on small screens */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
            <span className="text-primary-foreground/80 text-sm">
              Vagas se esgotando rapidamente
            </span>
          </div>

          {/* CTA Button */}
          <Button
            variant="cta"
            size="default"
            onClick={scrollToPlans}
            className="shrink-0 text-sm sm:text-base animate-pulse-glow"
          >
            <LightningIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Garantir Minha Vaga</span>
            <span className="sm:hidden">Comprar</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
