import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import SocialNetwork from "./SocialNetwork";

export default function SocialNetworks() {
  return (
    <div className="flex">
      <SocialNetwork
        icone={<IconBrandInstagram />}
        url="https://www.instagram.com/renataferreiraag"
      />
      <SocialNetwork
        icone={<IconBrandWhatsapp />}
        url="https://api.whatsapp.com/send?phone=5581988390171&text=Oi%2C%20eu%20gostaria%20de%20agendar%20uma%20consulta%21"
      />
    </div>
  );
}
