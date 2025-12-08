import { ShieldCheckIcon, HeartFilledIcon } from "@/components/CustomIcons";
import { FloatingElement, CrossIcon, HeartIcon, WaveDivider } from "@/components/FloatingElements";
import { RefreshCcw } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="relative py-20 bg-card overflow-hidden">
      {/* Wave Divider Top */}
      <WaveDivider className="absolute top-0 left-0 text-background -translate-y-[99%]" />
      
      {/* Decorative */}
      <FloatingElement animation="float-slow" className="absolute top-10 left-10">
        <CrossIcon className="w-12 h-12 opacity-20" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute bottom-10 right-10">
        <HeartIcon className="w-10 h-10 opacity-20" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-featured border-4 border-forest/30 relative overflow-hidden group hover:border-forest/50 transition-colors">
            {/* Animated background */}
            <div className="absolute inset-0 bg-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-forest/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheckIcon className="w-16 h-16 text-forest animate-glow-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-forest" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Garantia Incondicional de 7 Dias
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Eu tenho <strong className="text-foreground">tanta certeza</strong> de que o Altar Kids vai transformar a vida espiritual do seu filho que você tem 7 dias inteiros para testar. Se por qualquer motivo você não ficar 100% satisfeito, basta enviar um e-mail e devolvemos cada centavo. Sem perguntas, sem burocracia.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-2 group/item">
                    <RefreshCcw className="w-5 h-5 text-forest group-hover/item:animate-rotate-slow" />
                    <span className="text-sm text-muted-foreground">Reembolso rápido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartFilledIcon className="w-5 h-5 text-coral animate-heartbeat" />
                    <span className="text-sm text-muted-foreground">Sem burocracia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Risco zero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
