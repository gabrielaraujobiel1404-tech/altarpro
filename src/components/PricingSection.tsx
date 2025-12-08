import { Button } from "@/components/ui/button";
import { FloatingElement, StarIcon, HeartIcon, CrossIcon, WaveDivider } from "@/components/FloatingElements";
import { CrownIcon, FlameIcon, SunburstIcon, CheckCircleIcon, MedalIcon, LightningIcon } from "@/components/CustomIcons";
import { CountdownTimer, LimitedSpotsIndicator } from "@/components/UrgencyElements";

const plans = [
  {
    id: "luz",
    name: "LUZ",
    price: "10,00",
    icon: <SunburstIcon className="w-8 h-8" />,
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    description: "Acesso Vitalício",
    subtitle: "Uma parcela e pronto!",
    features: [
      "35 Livros de Colorir Digitais",
      "Suporte por E-mail",
      "Garantia de 7 Dias",
      "DIREITO DE REVENDA",
    ],
    buttonVariant: "outline" as const,
    featured: false,
    badge: null,
  },
  {
    id: "chama",
    name: "CHAMA",
    price: "12,90",
    icon: <FlameIcon className="w-8 h-8" />,
    iconBg: "bg-coral/20",
    iconColor: "text-coral",
    description: "Acesso Vitalício",
    subtitle: "Uma parcela e pronto!",
    features: [
      "App Infantil Exclusivo",
      "1 Devocional Novo por Mês",
      "Desafios Semanais",
      "Minigames Educativos",
      "Comunidade Kids",
      "Orações Guiadas",
      "DIREITO DE REVENDA",
    ],
    buttonVariant: "cta" as const,
    featured: true,
    badge: "MAIS VENDIDO",
  },
  {
    id: "altar-pro",
    name: "ALTAR PRO",
    price: "15,90",
    icon: <CrownIcon className="w-8 h-8" />,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    description: "Acesso Vitalício",
    subtitle: "Uma parcela e pronto!",
    features: [
      "TUDO do Plano LUZ",
      "TUDO do Plano CHAMA",
      "CONTEÚDO COMPLETO",
      "Atualizações Vitalícias",
      "Suporte Prioritário",
      "DIREITO DE REVENDA",
    ],
    buttonVariant: "default" as const,
    featured: false,
    badge: "COMPLETO",
  },
];

export const PricingSection = () => {
  return (
    <section id="planos" className="relative py-20 bg-card overflow-hidden">
      {/* Wave Divider Top */}
      <WaveDivider className="absolute top-0 left-0 text-background -translate-y-[99%]" />
      
      {/* Decorative Elements */}
      <FloatingElement animation="sparkle" className="absolute top-20 left-10">
        <StarIcon className="w-12 h-12 opacity-30" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute top-40 right-10">
        <HeartIcon className="w-10 h-10 opacity-30" />
      </FloatingElement>
      <FloatingElement animation="float-slow" className="absolute bottom-20 left-1/4">
        <CrossIcon className="w-14 h-14 opacity-20" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <LightningIcon className="w-4 h-4 text-secondary" />
            <span>Investimento que Transforma</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o Plano <span className="text-primary">Ideal</span> Para Sua Família
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Por menos que um lanche, você dá ao seu filho um presente eterno
          </p>

          {/* Countdown & Urgency */}
          <div className="max-w-md mx-auto mb-8">
            <CountdownTimer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-background rounded-3xl p-8 shadow-card transition-all duration-500 hover:shadow-featured hover:-translate-y-4 group ${
                plan.featured
                  ? "border-4 border-coral scale-105 md:scale-110 z-10"
                  : "border-2 border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 ${
                    plan.featured
                      ? "bg-coral text-accent-foreground animate-pulse"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {plan.featured && <FlameIcon className="w-4 h-4" />}
                  {plan.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 ${plan.iconBg} rounded-2xl flex items-center justify-center ${plan.iconColor} mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {plan.icon}
              </div>

              {/* Plan Name */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Plano</p>
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-primary font-semibold mt-2">{plan.description}</p>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform ${
                      plan.featured ? "bg-coral" : "bg-forest"
                    }`}>
                      <CheckCircleIcon className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className={`text-sm ${feature.includes("TUDO") || feature === "DIREITO DE REVENDA" || feature === "CONTEÚDO COMPLETO" ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                size="lg"
                className="w-full group/btn"
              >
                {plan.featured ? (
                  <>
                    <FlameIcon className="w-5 h-5 group-hover/btn:animate-wiggle" />
                    <span>QUERO ESSE!</span>
                  </>
                ) : (
                  "Escolher Plano"
                )}
              </Button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-1 mt-4">
                <MedalIcon className="w-4 h-4 text-forest" />
                <span className="text-xs text-muted-foreground">Garantia de 7 dias</span>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Elements */}
        <div className="max-w-md mx-auto">
          <LimitedSpotsIndicator spots={23} />
        </div>
      </div>
    </section>
  );
};
