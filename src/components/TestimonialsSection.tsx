import { FloatingElement, StarIcon, WaveDivider } from "@/components/FloatingElements";
import { HeartFilledIcon, SparkleStarIcon } from "@/components/CustomIcons";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Mãe de 2 filhos",
    avatar: "M",
    avatarColor: "bg-coral",
    text: "Meus filhos pararam de pedir o tablet para joguinhos sem sentido. Agora eles PEDEM para fazer o devocional! Não acredito na transformação.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    role: "Pai de Lucas, 6 anos",
    avatar: "C",
    avatarColor: "bg-primary",
    text: "O Lucas agora sabe mais histórias bíblicas do que eu! E o melhor: ele me ensina. Valeu cada centavo.",
    rating: 5,
  },
  {
    name: "Ana Paula M.",
    role: "Mãe e professora de EBD",
    avatar: "A",
    avatarColor: "bg-forest",
    text: "Uso nas aulas da igreja também. As crianças adoram os livros de colorir e os desafios semanais. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Pr. Roberto",
    role: "Pastor e pai",
    avatar: "R",
    avatarColor: "bg-secondary",
    text: "Finalmente um conteúdo de qualidade para nossas crianças. O app é seguro, divertido e cheio de ensinamentos bíblicos.",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    role: "Mãe solo de 3",
    avatar: "F",
    avatarColor: "bg-coral",
    text: "Com o trabalho, mal tenho tempo de ensinar a Palavra. O Altar Kids faz isso de forma tão natural que meus filhos nem percebem que estão aprendendo!",
    rating: 5,
  },
  {
    name: "João e Maria",
    role: "Casal missionário",
    avatar: "J",
    avatarColor: "bg-primary",
    text: "Usamos até no campo missionário! As crianças de lá amaram os livros de colorir. O direito de revenda nos ajudou muito.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Wave Divider Top */}
      <WaveDivider className="absolute top-0 left-0 text-card -translate-y-[99%]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HeartFilledIcon className="w-4 h-4" />
            <span>Famílias Transformadas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veja o Que Outros Pais <span className="text-coral">Estão Dizendo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            +2.847 famílias já estão plantando sementes de fé em seus filhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-featured transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <SparkleStarIcon 
                    key={i} 
                    className="w-5 h-5 text-secondary group-hover:animate-sparkle" 
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Counter */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "2.847+", label: "Famílias felizes" },
            { number: "35", label: "Livros de colorir" },
            { number: "100%", label: "Conteúdo cristão" },
            { number: "4.9", label: "Nota média" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <FloatingElement animation="bounce-gentle">
                <p className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform">{stat.number}</p>
              </FloatingElement>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
