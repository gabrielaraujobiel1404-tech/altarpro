import { useState, useEffect } from "react";
import { LightningIcon, TimerIcon } from "@/components/CustomIcons";

interface CountdownTimerProps {
  className?: string;
}

export const CountdownTimer = ({ className }: CountdownTimerProps) => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          return { hours: 2, minutes: 47, seconds: 33 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <TimerIcon className="w-5 h-5 text-coral animate-pulse" />
        <span className="text-sm font-bold text-coral uppercase tracking-wide">
          Oferta expira em:
        </span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <TimeBlock value={formatNumber(time.hours)} label="horas" />
        <span className="text-2xl font-bold text-coral animate-pulse">:</span>
        <TimeBlock value={formatNumber(time.minutes)} label="min" />
        <span className="text-2xl font-bold text-coral animate-pulse">:</span>
        <TimeBlock value={formatNumber(time.seconds)} label="seg" />
      </div>
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-foreground text-primary-foreground px-4 py-2 rounded-xl font-bold text-2xl md:text-3xl min-w-[60px] text-center shadow-lg">
      {value}
    </div>
    <span className="text-xs text-muted-foreground mt-1 uppercase">{label}</span>
  </div>
);

// Badge de urgência piscante
export const UrgencyBadge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full border border-coral/30 ${className}`}>
    <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
    <span className="font-bold text-sm">{children}</span>
    <LightningIcon className="w-4 h-4 animate-pulse" />
  </div>
);

// Indicador de vagas limitadas
export const LimitedSpotsIndicator = ({ spots = 23 }: { spots?: number }) => {
  return (
    <div className="bg-coral/5 border-2 border-coral/20 rounded-2xl p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <LightningIcon className="w-5 h-5 text-coral" />
        <span className="text-sm font-bold text-coral uppercase">Vagas Limitadas</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-3xl font-bold text-foreground">{spots}</span>
        <span className="text-muted-foreground">pessoas comprando agora</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mt-3 overflow-hidden">
        <div 
          className="bg-coral h-full rounded-full animate-pulse" 
          style={{ width: '78%' }}
        />
      </div>
    </div>
  );
};
