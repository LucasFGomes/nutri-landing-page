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
        url="https://github.com/cod3rcursos"
      />
    </div>
  );
}
