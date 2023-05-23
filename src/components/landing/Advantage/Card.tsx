import Image from "next/image";

export interface CardProps {
  title: string;
  description: string;
  url: string;
  imageWidth: number;
  imageHeight: number;
}

export default function Card({
  title,
  description,
  url,
  imageWidth,
  imageHeight,
}: CardProps) {
  return (
    <div className="flex flex-row bg-background shadow-md rounded overflow-hidden h-[30vh]">
      <Image
        src={url}
        alt="Principal"
        width={imageWidth}
        height={imageHeight}
      />
      <div className="flex flex-col items-start gap-4 p-4">
        <h3 className="font-semibold text-base text-primary">{title}</h3>
        <p className="font-light text-start text-sm text-second leading-4">
          {description}
        </p>
      </div>
    </div>
  );
}
