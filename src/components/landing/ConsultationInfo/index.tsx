import Area from "../Common/Area";
import { Item } from "./Item";

interface IndexProps {}

export default function ConsultationInfo(props: IndexProps) {
  return (
    <Area id="nutritional-consultation" className="bg-gray-100 py-4">
      <h3 className="text-3xl font-medium text-primary mb-6 text-center md:text-start">
        O que há na consulta?
      </h3>

      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6">
        <Item url={"/ananmese.png"} title={"Anamnese clínica e alimentar"} />
        <Item
          url={"/plano-individualizado.png"}
          title={"Plano alimentar individualizado"}
        />
        <Item
          url={"/avaliacao-nutricional.png"}
          title={"Avaliação física com adipômetro e bioimpedância"}
        />
        <Item
          url={"/exames-laboratoriais.png"}
          title={"Solicitação de exames laboratoriais"}
        />
        <Item
          url={"/orientacao-nutricional.png"}
          title={"Orientações nutricionais"}
        />
        <Item
          url={"/material-de-apoio.png"}
          title={"Material de apoio e receitas práticas"}
        />
        <Item url={"/app.png"} title={"Acesso ao aplicativo pelo celular"} />
        <Item url={"/whatsapp.png"} title={"Pós atendimento por WhatsApp"} />
      </ul>
    </Area>
  );
}
