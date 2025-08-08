import { useState, useRef } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="bg-[#330808] text-white">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full px-2 py-3 text-left  text-white font-medium text-sm md:text-[20px] transition-all cursor-pointer"
      >
        <span>{title}</span>
        <img
          src="/acordeon.png"
          alt="abrir acordeon"
          className={`w-4 md:w-7 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden text-sm md:text-base text-gray-300 px-2"
      >
        <div className="py-3">{content}</div>
      </div>
    </div>
  );
};

export default function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: "1. Para quem é a Mentoria Raiz?",
      content: "Para empreendedores(as) que querem estruturar seus negócios com verdade, estratégia e maturidade. É ideal para quem quer sair da estagnação ou pra quem está começando algo novo e quer construir uma jornada sólida e coerente com seus valores. Essa mentoria não é só para advogados!",
    },
    {
      title: "2. Preciso estar começando agora para participar?",
      content: "Não! A mentoria também é muito útil para quem já começou, mas sente que está perdido(a), sobrecarregado(a) ou sem clareza sobre os próximos passos.",
    },
    {
      title: "3. A mentoria é 100% online?",
      content: "Sim! Todos os encontros serão feitos online. Assim, você pode participar de onde estiver.",
    },
    {
      title: "4. Os encontros ficam gravados?",
      content: "Não… Nosso conteúdo será voltado para casos reais, de pessoas reais e por isso, não podem ficar gravados. ",
    },
    {
      title: "5. Quantos encontros teremos?",
      content: "Serão encontros individuais quinzenais e mensais em grupo durante os 3 meses de mentoria (setembro a dezembro), além de grupo exclusivo e desafios mensais.",
    },
    {
      title: "6. É uma mentoria em grupo ou individual?",
      content: "É uma mentoria mista, realizada mensalmente com o grupo, mas quinzenalmente de forma individual para proporcionar mais momentos de escuta individual e clareza no direcionamento das questões reais do seu negócio. Você terá a oportunidade de ser acompanhado(a) de forma próxima e personalizada, mesmo em grupo.",
    },
    {
      title: "7. Qual o valor da mentoria?",
      content: "O investimento é de R$ 3.597 à vista ou parcelado para individual e para sócios(dupla) o investimento é de R$ 5.597. Esse valor inclui todos os encontros, materiais, acesso ao grupo e acompanhamento da mentora.",
    },
    {
      title: "8. Como faço a inscrição?",
      content: "Basta clicar no botão “Quero entrar” ao final da página, preencher seus dados e garantir sua vaga. As vagas são limitadas.",
    },
    {
      title: "9. Como tenho acesso ao grupo especial?",
      content: "logo após feito a inscrição e o pagamento, será enviado para o seu email o link de acesso.",
    }
  ];

  // Divide em 2 colunas
  const metade = Math.ceil(items.length / 2);
  const colEsquerda = items.slice(0, metade);
  const colDireita = items.slice(metade);

  return (
    
      <div data-aos={props.effect} data-aos-delay={props.delay} className="relative flex flex-col md:flex-row max-w-6xl  gap-x-15 my-8">
        {/* Coluna Esquerda */}
        <div className="flex-1 space-y-3 relative z-10">
          {colEsquerda.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

        {/* linha divisória */}
        <div className="hidden md:block w-[1px] bg-[#FEC300] mx-2" />

        {/* Coluna Direita */}
        <div className="flex-1 space-y-3 relative z-10">
          {colDireita.map((item, index) => {
            const realIndex = index + metade; // ajusta o índice real
            return (
              <AccordionItem
                key={realIndex}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === realIndex}
                onClick={() => toggle(realIndex)}
              />
            );
          })}
        </div>
      </div>

     
    
  );
}
