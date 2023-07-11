import Area from "../Common/Area";
import Card, { CardProps } from "./Card";

export default function Advantage() {
  const cards: CardProps[] = [
    {
      title: "Educação nutricional",
      description:
        "Podemos fornecer educação nutricional para ajudá-lo a entender melhor como os alimentos afetam seu corpo, quais são os nutrientes essenciais e como fazer escolhas alimentares saudáveis em diferentes situações.",
      url: "/foto07.jpg",
      imageWidth: 130,
      imageHeight: 30,
    },
    {
      title: "Prevenção de doenças",
      description:
        "A nutrição adequada pode ajudar a prevenir várias doenças crônicas, como obesidade, diabetes tipo 2, doenças cardíacas e tipos de câncer. Podemos ajudá-lo a adotar um estilo de vida alimentar saudável.",
      url: "/foto-prevencao-doencas.jpg",
      imageWidth: 130,
      imageHeight: 30,
    },
    {
      title: "Orientação personalizada",
      description:
        "Cada indivíduo tem necessidades nutricionais únicas e um nutricionista pode ajudá-lo a entender e atender essas necessidades específicas. Podemos avaliar sua saúde atual, histórico alimentar.",
      url: "/foto08.jpg",
      imageWidth: 130,
      imageHeight: 30,
    },
  ];

  return (
    <Area id="advantage" className="bg-gray-100 py-4">
      <div className="my-4">
        <h3 className="text-3xl font-medium text-primary mb-6 text-center md:text-start">
          Benefícios do Atendimento Nutricional
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              url={card.url}
              imageWidth={card.imageWidth}
              imageHeight={card.imageHeight}
            />
          ))}
        </div>
      </div>
    </Area>
  );
}
