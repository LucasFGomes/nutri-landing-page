import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#home">
      <Image
        width={120}
        height={40}
        src={"/logo-principal.png"}
        alt="Logo da Nutricionista Renata Ferreira"
      />
    </Link>
  );
}
