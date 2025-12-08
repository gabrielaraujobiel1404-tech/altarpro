import { Button } from "@/components/ui/button";
import { FloatingElement, PaperPlane, Cloud, StarIcon, HeartIcon } from "@/components/FloatingElements";
import { GiftIcon, SparkleStarIcon, BookOpenIcon, SmartphoneIcon } from "@/components/CustomIcons";
import { CountdownTimer, UrgencyBadge } from "@/components/UrgencyElements";
import heroImage from "@/assets/hero-children.png";

export const HeroSection = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-8 pb-16">
      {/* Floating Clouds */}
      <Cloud className="absolute top-20 left-10 opacity-60" size="lg" />
      <Cloud className="absolute top-40 right-20 opacity-50" size="md" />
      <Cloud className="absolute bottom-32 left-1/4 opacity-40" size="sm" />

      {/* Floating Paper Planes */}
      <FloatingElement animation="float" className="absolute top-32 left-[15%]">
        <PaperPlane color="orange" className="w-10 h-10 rotate-12" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute top-24 right-[20%]">
        <PaperPlane color="yellow" className="w-14 h-14 -rotate-12" />
      </FloatingElement>

      {/* Floating Stars & Hearts */}
      <FloatingElement animation="sparkle" className="absolute top-48 left-[8%]">
        <StarIcon className="w-8 h-8" />
      </FloatingElement>
      <FloatingElement animation="bounce-gentle" className="absolute top-60 right-[12%]">
        <HeartIcon className="w-10 h-10 animate-heartbeat" />
      </FloatingElement>
      <FloatingElement animation="sparkle" className="absolute bottom-40 right-[8%]">
        <SparkleStarIcon className="w-6 h-6 text-secondary" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-slide-up">
              <UrgencyBadge className="mb-4">
                Últimas vagas com preço promocional
              </UrgencyBadge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up-delayed">
              Seu filho merece{" "}
              <span className="text-primary">conhecer Jesus</span>{" "}
              de forma{" "}
              <span className="text-coral">divertida</span> e{" "}
              <span className="text-secondary">transformadora</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0 animate-slide-up-delayed-2">
              Enquanto outras crianças perdem horas em telas sem propósito, 
              <strong className="text-foreground"> seu filho pode estar aprendendo valores eternos</strong> através de histórias bíblicas, atividades educativas e diversão com significado.
            </p>

            {/* Countdown Timer */}
            <div className="mb-6 animate-fade-in">
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="cta" size="xl" onClick={scrollToPlans} className="group">
                <GiftIcon className="w-6 h-6 group-hover:animate-wiggle" />
                <span>Quero Transformar Meu Filho</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-sky-medium border-2 border-card flex items-center justify-center overflow-hidden"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-6 h-6 bg-primary/20 rounded-full" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+2.847</strong> famílias transformadas
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-5 h-5 animate-sparkle" />
                ))}
                <span className="text-sm font-semibold text-foreground ml-1">4.9</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-slide-in-right">
            <FloatingElement animation="float-slow">
              <img
                src={heroImage}
                alt="Crianças felizes lendo histórias bíblicas"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-featured"
              />
            </FloatingElement>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4 animate-bounce-gentle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                  <BookOpenIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">35+ Livros</p>
                  <p className="text-sm text-muted-foreground">Para Colorir</p>
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card p-4 animate-wiggle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-coral rounded-xl flex items-center justify-center">
                  <SmartphoneIcon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">App Kids</p>
                  <p className="text-sm text-muted-foreground">Exclusivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
