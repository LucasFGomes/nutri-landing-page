import Link from "next/link";
import React from "react";

interface SocialNetworkProps {
  icone: any;
  url: string;
}

export default function SocialNetwork(props: SocialNetworkProps) {
  return (
    <Link href={props.url} target="_blank">
      <div className="bg-primary rounded-lg p-1 mr-3 cursor-pointer">
        {React.cloneElement(props.icone, {
          size: 35,
          strokeWidth: 1,
          className: "text-whiteLight",
        })}
      </div>
    </Link>
  );
}
