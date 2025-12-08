import { FloatingElement, StarIcon, HeartIcon, CrossIcon } from "@/components/FloatingElements";
import { AlertTriangle, Clock, Smartphone, Frown } from "lucide-react";

const problems = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Telas sem propósito",
    description: "Horas perdidas em conteúdos vazios que não edificam nem educam",
  },
  {
    icon: <Frown className="w-8 h-8" />,
    title: "Ansiedade e agitação",
    description: "Crianças cada vez mais ansiosas e desconectadas da fé",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Falta de tempo",
    description: "Pais ocupados sem recursos para ensinar a Palavra",
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Influências negativas",
    description: "O mundo oferece valores contrários aos cristãos",
  },
];

export const ProblemSection = () => {
  return (
    <section className="relative py-20 bg-card overflow-hidden">
      {/* Decorative Elements */}
      <FloatingElement animation="float-slow" className="absolute top-10 right-10">
        <HeartIcon className="w-12 h-12 opacity-20" />
      </FloatingElement>
      <FloatingElement animation="float-delayed" className="absolute bottom-10 left-10">
        <CrossIcon className="w-16 h-16 opacity-20" />
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚠️ Você já percebeu?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O mundo está <span className="text-coral">roubando</span> o coração dos nossos filhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enquanto você trabalha duro para dar o melhor, forças invisíveis estão moldando os valores do seu filho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-featured transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-coral/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center text-coral mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Emotional Hook */}
        <div className="bg-ocean/5 rounded-3xl p-8 md:p-12 text-center border-2 border-ocean/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            😔 Você sente que está perdendo essa batalha?
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Não se culpe. A boa notícia é que existe uma forma <strong className="text-primary">simples, divertida e eficaz</strong> de plantar sementes de fé no coração do seu filho — mesmo com pouco tempo e sem gastar fortunas.
          </p>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="w-6 h-6" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
