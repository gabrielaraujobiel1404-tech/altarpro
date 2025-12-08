import { CrossIcon } from "@/components/FloatingElements";
import { HeartFilledIcon } from "@/components/CustomIcons";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <CrossIcon className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary-foreground">Altar Kids</span>
          </a>

          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md">
            Formando uma geração que ama a Jesus desde cedo. Conteúdo cristão de qualidade para seus filhos.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors hover:underline">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors hover:underline">
              Suporte
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors hover:underline">
              Contato
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-muted-foreground/20 mb-6" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Feito com <HeartFilledIcon className="w-4 h-4 text-coral animate-heartbeat" /> para famílias cristãs
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} Altar Kids. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
