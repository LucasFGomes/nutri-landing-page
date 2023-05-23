import Image from "next/image";
import foto01 from "../../../../public/foto01.jpg";
import Area from "../Common/Area";

export default function About() {
  return (
    <Area className="bg-gray-100" id="about">
      <div
        className={`
        flex 
        flex-row 
        items-center 
        justify-center 
        gap-8 
        my-8
        max-sm:flex-col
      `}
      >
        <Image
          className="rounded-lg w-[350px] h-[400px] max-md:w-[300px] max-md:h-[400px] shadow-md"
          src={foto01}
          alt="Foto de Sobre mim da Nutricionista Renata Ferreira"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-medium text-primary max-sm:text-center">
            Quem é Renata Ferreira?
          </h2>
          <p
            className={`
              flex flex-col items-center md:items-start text-lg text-justify
              text-primary font-light
            `}
          >
            Nutricionista, também formada em técnico de nutrição e dietética.
            Meu objetivo é ajudar pessoas que buscam melhorar sua saúde e
            bem-estar por meio da alimentação. Ofereço suporte na reeducação
            alimentar, auxiliando na realização de escolhas saudáveis para
            alcançar objetivos como emagrecimento, hipertrofia, tratamento e
            prevenção de doenças, além de melhoria de sinais e sintomas, como
            queda de cabelo, crises alérgicas, insônia, ansiedade, problemas
            intestinais, entre outros. Fico feliz em poder ajudá-lo(a) no que
            for necessário, traçando metas para alcançar o seu objetivo.
          </p>
        </div>
      </div>
    </Area>
  );
}
