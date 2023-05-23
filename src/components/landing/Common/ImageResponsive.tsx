import Image from "next/image";

interface ImageResponsiveProps {
  imagem: any;
  className?: string;
}

export default function ImageResponsive(props: ImageResponsiveProps) {
  return (
    <Image
      src={props.imagem}
      alt="Imagem"
      className={`
        w-[100%] h-[180px]
        sm:w-[200px] sm:h-[330px]
        md:w-[260px] md:h-[365px]
        lg:w-[260px] lg:h-[365px]
        rounded-xl object-cover
        ${props.className ?? ""}
    `}
    />
  );
}
