import { CrossIcon } from "@/components/FloatingElements";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
              <CrossIcon className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary-foreground">Altar Kids</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md">
            Formando uma geração que ama a Jesus desde cedo. Conteúdo cristão de qualidade para seus filhos.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Suporte
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-muted-foreground/20 mb-6" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-coral fill-coral" /> para famílias cristãs
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} Altar Kids. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
