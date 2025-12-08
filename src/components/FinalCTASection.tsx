import { Button } from "@/components/ui/button";
import { FloatingElement, PaperPlane, StarIcon, HeartIcon, CrossIcon } from "@/components/FloatingElements";
import { ArrowDown, Clock, Users, Shield } from "lucide-react";

export const FinalCTASection = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Floating Elements */}
      <FloatingElement animation="float" className="absolute top-10 left-10">
        <PaperPlane color="yellow" className="w-12 h-12 opacity-30" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute bottom-10 right-10">
        <StarIcon className="w-10 h-10 text-secondary opacity-50" />
      </FloatingElement>
      <FloatingElement animation="float-slow" className="absolute top-1/2 left-1/4">
        <HeartIcon className="w-8 h-8 text-coral opacity-40" />
      </FloatingElement>
      <FloatingElement animation="bounce-gentle" className="absolute bottom-20 left-20">
        <CrossIcon className="w-12 h-12 text-secondary opacity-30" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            A Decisão Mais Importante Que Você Vai Tomar Pelos Seus Filhos Hoje
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Enquanto você lê isso, milhares de crianças estão sendo moldadas por conteúdos sem valor. 
            <strong className="text-secondary"> Seu filho não precisa ser uma delas.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="secondary" size="xl" onClick={scrollToPlans} className="group">
              <span>🎁 Quero Transformar Meu Filho Agora</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">+2.847 famílias</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Garantia 7 dias</span>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-primary-foreground font-semibold">
              ⏰ <span className="text-secondary">Oferta especial de lançamento:</span> Os preços podem aumentar a qualquer momento. Garanta o seu acesso agora!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
