import { FloatingElement, PaperPlane, StarIcon } from "@/components/FloatingElements";
import coloringBooks from "@/assets/coloring-books.png";
import appMockup from "@/assets/app-mockup.png";
import { Check, Palette, Smartphone, Heart, BookOpen, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "35 Livros de Colorir",
    description: "Histórias bíblicas ilustradas para seu filho pintar e aprender",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App Infantil Exclusivo",
    description: "Jogos, orações guiadas e devocionais interativos",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Devocionais Mensais",
    description: "Conteúdo novo todo mês para manter o engajamento",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Comunidade Kids",
    description: "Seu filho conectado com outras crianças cristãs",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Orações Guiadas",
    description: "Ensine seu filho a orar de forma natural e divertida",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Desafios Semanais",
    description: "Atividades práticas para viver a fé no dia a dia",
  },
];

export const SolutionSection = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Floating Elements */}
      <FloatingElement animation="float" className="absolute top-20 left-10">
        <PaperPlane color="blue" className="w-8 h-8 rotate-45" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute bottom-20 right-10">
        <PaperPlane color="yellow" className="w-10 h-10 -rotate-12" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-forest/10 text-forest px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✅ A Solução Completa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apresentamos o <span className="text-primary">Altar Kids</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A plataforma completa para formar uma geração que ama a Jesus desde cedo
          </p>
        </div>

        {/* Feature 1: Coloring Books */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <FloatingElement animation="float-slow">
              <img
                src={coloringBooks}
                alt="Livros de colorir bíblicos"
                className="w-full max-w-md mx-auto rounded-3xl shadow-featured border-4 border-card"
              />
            </FloatingElement>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              📚 35 Livros de Colorir Digitais
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Seu filho vai <strong className="text-primary">se divertir colorindo</strong> enquanto aprende as histórias mais importantes da Bíblia. De Noé a Jesus, cada página é uma semente plantada no coração.
            </p>
            <ul className="space-y-3">
              {["Imprima quantas vezes quiser", "Histórias do Antigo e Novo Testamento", "Arte de alta qualidade", "Perfeito para todas as idades"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2: App */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
          <div className="flex-1">
            <FloatingElement animation="float-delayed">
              <img
                src={appMockup}
                alt="App infantil cristão"
                className="w-full max-w-sm mx-auto rounded-3xl shadow-featured"
              />
            </FloatingElement>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              📱 App Infantil Exclusivo
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Transforme o tempo de tela em <strong className="text-coral">tempo com Deus</strong>. Jogos educativos, orações guiadas, minigames e muito mais — tudo em um ambiente seguro e 100% cristão.
            </p>
            <ul className="space-y-3">
              {["Devocionais novos todo mês", "Desafios semanais de fé", "Minigames educativos", "Comunidade exclusiva para crianças"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-featured transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
