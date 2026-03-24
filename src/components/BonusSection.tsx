import { FloatingElement, StarIcon, HeartIcon, CrossIcon, WaveDivider } from "@/components/FloatingElements";
import { GiftIcon, BookOpenIcon, SmartphoneIcon, SparkleStarIcon, CheckCircleIcon, CrownIcon, PrayingHandsIcon, LightningIcon } from "@/components/CustomIcons";
import { Button } from "@/components/ui/button";

const bonuses = [
  {
    icon: <BookOpenIcon className="w-8 h-8" />,
    title: "E-book: Histórias Bíblicas Ilustradas",
    description: "12 histórias completas com ilustrações exclusivas para ler com seu filho antes de dormir.",
    value: "R$ 29,90",
    color: "bg-primary/15 text-primary",
    borderColor: "border-primary/30",
  },
  {
    icon: <SmartphoneIcon className="w-8 h-8" />,
    title: "Grupo VIP no WhatsApp",
    description: "Comunidade exclusiva de pais cristãos com dicas, orações e suporte mútuo.",
    value: "R$ 49,90",
    color: "bg-forest/15 text-forest",
    borderColor: "border-forest/30",
  },
  {
    icon: <PrayingHandsIcon className="w-8 h-8" />,
    title: "Guia de Orações para Crianças",
    description: "30 orações ilustradas para cada momento: manhã, refeições, escola e antes de dormir.",
    value: "R$ 19,90",
    color: "bg-coral/15 text-coral",
    borderColor: "border-coral/30",
  },
  {
    icon: <CrownIcon className="w-8 h-8" />,
    title: "Aulas Bônus em Vídeo",
    description: "5 videoaulas animadas ensinando valores bíblicos de forma lúdica e divertida.",
    value: "R$ 59,90",
    color: "bg-secondary/20 text-secondary-foreground",
    borderColor: "border-secondary/50",
  },
];

export const BonusSection = () => {
  const totalValue = bonuses.reduce((acc, b) => {
    const num = parseFloat(b.value.replace("R$ ", "").replace(",", "."));
    return acc + num;
  }, 0);

  return (
    <section className="relative py-20 bg-card overflow-hidden">
      <WaveDivider className="absolute top-0 left-0 text-background -translate-y-[99%]" />

      <FloatingElement animation="sparkle" className="absolute top-16 right-12">
        <StarIcon className="w-10 h-10 opacity-25" />
      </FloatingElement>
      <FloatingElement animation="float-slow" className="absolute bottom-24 left-8">
        <CrossIcon className="w-12 h-12 opacity-20" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute top-1/2 right-6">
        <HeartIcon className="w-8 h-8 opacity-20" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-coral/15 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-heartbeat">
            <GiftIcon className="w-5 h-5" />
            <span>Bônus Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            E Tem <span className="text-coral">Mais!</span> Olha o Que Você
            <br className="hidden md:block" /> Vai Receber de <span className="text-primary">Presente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Além de todo o conteúdo dos planos, preparamos bônus especiais para
            potencializar a jornada espiritual do seu filho
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl p-6 border-2 ${bonus.borderColor} shadow-card hover:shadow-featured hover:-translate-y-2 transition-all duration-500 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Value Badge */}
              <div className="absolute -top-3 -right-3 bg-coral text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md group-hover:scale-110 transition-transform">
                Valor: {bonus.value}
              </div>

              <div className="flex gap-4 items-start">
                <div className={`w-14 h-14 rounded-xl ${bonus.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {bonus.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>

              {/* Checkmark */}
              <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircleIcon className="w-6 h-6 text-forest" />
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="max-w-lg mx-auto text-center bg-background rounded-3xl p-8 border-2 border-secondary/40 shadow-featured">
          <div className="flex items-center justify-center gap-2 mb-3">
            <SparkleStarIcon className="w-6 h-6 text-secondary animate-sparkle" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Valor total dos bônus
            </span>
            <SparkleStarIcon className="w-6 h-6 text-secondary animate-sparkle" />
          </div>

          <div className="relative mb-2">
            <p className="text-3xl font-bold text-muted-foreground line-through decoration-coral decoration-4">
              R$ {totalValue.toFixed(2).replace(".", ",")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <LightningIcon className="w-5 h-5 text-coral animate-pulse" />
            <p className="text-xl font-bold text-forest">
              GRÁTIS no seu plano hoje!
            </p>
            <LightningIcon className="w-5 h-5 text-coral animate-pulse" />
          </div>

          <Button variant="cta" size="xl" className="w-full">
            <GiftIcon className="w-6 h-6" />
            QUERO MEUS BÔNUS AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};
