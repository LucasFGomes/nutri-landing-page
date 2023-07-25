import { IconBrandWhatsapp } from "@tabler/icons-react";
import principal from "../../../../public/foto05.jpg";
import Area from "../Common/Area";
import ImageResponsive from "../Common/ImageResponsive";
import Slogan from "./Slogan";

export default function Main() {
  return (
    <Area className="bg-gray-100">
      <div
        id="home"
        className={`
            flex items-center justify-around 
            h-[60vh]
            max-md:h-[40vh]
            mt-24
        `}
      >
        <div className="flex flex-col gap-6">
          <Slogan />
          <a
            href={
              "https://api.whatsapp.com/send?phone=5581991466717&text=Oi%2C%20eu%20gostaria%20de%20agendar%20uma%20consulta%21"
            }
            className="bg-green-500 text-center text-white p-4 rounded-xl cursor-pointer hover:bg-green-600"
          >
            <div className="flex items-center justify-center gap-2">
              <IconBrandWhatsapp />
              <span>Agende sua consulta</span>
            </div>
          </a>
        </div>
        <ImageResponsive
          imagem={principal}
          className="rotate-3 hidden md:inline"
        />
      </div>
    </Area>
  );
}
