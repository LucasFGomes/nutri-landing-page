import Image from "next/image";

interface ItemProps {
  title: string;
  url: string;
}

export function Item({ title, url }: ItemProps) {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-center w-16 h-w-16 rounded-full p-4 bg-background">
        <Image
          src={url}
          width={50}
          height={50}
          className="text-primary"
          alt="Icone sobre nutrição"
        />
      </div>
      <li className="text-primary text-base font-medium mt-2 w-32 text-center">
        {title}
      </li>
    </div>
  );
}
