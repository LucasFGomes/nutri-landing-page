import Image from "next/image";
import Area from "../Common/Area";
import SocialNetwork from "./SocialNetworks";

export default function Footer() {
  return (
    <Area className="py-8">
      <div className="flex flex-col items-center md:items-start">
        <Image
          width={160}
          height={110}
          src={"/logo-principal.png"}
          alt="Logo da Nutricionista Renata Ferreira"
        />
        <div className="mt-3 text-zinc-400 text-center md:text-left">
          <div>
            Cuidando bem da sua{" "}
            <span className="font-bold text-second">saúde</span>
          </div>
          <div>renataferreiraanutri@gmail.com</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-4">
        <SocialNetwork />
        <p className="text-second mt-7 md:mt-0 text-center">
          <span className="font-bold">Renata Ferreira</span> ®{" "}
          {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </Area>
  );
}
