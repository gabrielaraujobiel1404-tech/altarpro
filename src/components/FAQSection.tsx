import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o Altar Kids?",
    answer: "O Altar Kids é uma plataforma completa de conteúdo cristão infantil que inclui livros de colorir digitais, um aplicativo exclusivo com jogos, devocionais, orações guiadas e muito mais. Tudo pensado para ajudar seu filho a conhecer Jesus de forma divertida e transformadora.",
  },
  {
    question: "Para qual idade é indicado?",
    answer: "O conteúdo foi desenvolvido para crianças de 3 a 12 anos, com atividades adaptadas para diferentes faixas etárias. Os mais novos podem colorir e ouvir as histórias, enquanto os maiores aproveitam os desafios e devocionais.",
  },
  {
    question: "Como funciona o acesso vitalício?",
    answer: "Você paga uma única vez e tem acesso para sempre! Sem mensalidades, sem taxas escondidas. Além disso, todas as atualizações futuras já estão incluídas no seu acesso.",
  },
  {
    question: "O que é o Direito de Revenda?",
    answer: "Todos os planos incluem o direito de você revender o produto e ficar com 100% do lucro. É uma ótima forma de gerar renda extra enquanto leva a Palavra de Deus às famílias.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você tem 7 dias para testar todo o conteúdo. Se por qualquer motivo não ficar satisfeito, basta enviar um e-mail solicitando o reembolso e devolvemos 100% do valor pago, sem perguntas.",
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Os livros de colorir funcionam em PDF e você pode baixar direto no computador ou celular. O app infantil está disponível para Android e iOS e pode ser baixado gratuitamente nas lojas oficiais.",
  },
  {
    question: "Posso imprimir os livros de colorir?",
    answer: "Sim! Os PDFs são de alta qualidade e você pode imprimir quantas vezes quiser. Perfeito para usar em casa, na igreja, na escola dominical ou presentear outras crianças.",
  },
  {
    question: "É seguro para meu filho usar o app?",
    answer: "Absolutamente! O app foi desenvolvido em ambiente 100% seguro, sem anúncios, sem links externos e sem nenhum conteúdo inapropriado. Apenas conteúdo cristão de qualidade.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-ocean/10 text-ocean px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ❓ Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ainda Tem <span className="text-primary">Dúvidas?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as perguntas mais comuns dos pais
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border-2 border-border px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
