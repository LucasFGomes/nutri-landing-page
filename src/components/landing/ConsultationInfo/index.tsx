import Area from "../Common/Area";
import { Item } from "./Item";

interface ItemProps {
  id: number;
  url: string;
  title: string;
}

export default function ConsultationInfo() {
  const items: ItemProps[] = [
    { id: 1, url: "/ananmese.png", title: "Anamnese clínica e alimentar" },
    {
      id: 2,
      url: "/plano-individualizado.png",
      title: "Plano alimentar individualizado",
    },
    {
      id: 3,
      url: "/avaliacao-nutricional.png",
      title: "Avaliação física com adipômetro e bioimpedância",
    },
    {
      id: 4,
      url: "/exames-laboratoriais.png",
      title: "Solicitação de exames laboratoriais",
    },
    {
      id: 5,
      url: "/orientacao-nutricional.png",
      title: "Orientações nutricionais",
    },
    {
      id: 6,
      url: "/material-de-apoio.png",
      title: "Materiais de apoio e receitas práticas",
    },
    { id: 7, url: "/app.png", title: "Acesso ao aplicativo pelo celular" },
    { id: 8, url: "/whatsapp.png", title: "Pós atendimento por WhatsApp" },
  ];

  return (
    <Area id="nutritional-consultation" className="bg-gray-100 py-4">
      <h3 className="text-3xl font-medium text-primary mb-6 text-center md:text-start">
        O que há na consulta?
      </h3>

      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6">
        {items.map((item) => (
          <Item key={item.id} url={item.url} title={item.title} />
        ))}
      </ul>
    </Area>
  );
}
