import { Button } from "@/components/ui/button";
import { CrossIcon } from "@/components/FloatingElements";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <CrossIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Altar Kids</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#planos" className="text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
            <Button variant="cta" size="sm" onClick={scrollToPlans}>
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#planos"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button variant="cta" onClick={scrollToPlans}>
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
