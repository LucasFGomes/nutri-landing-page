interface HomeProps {
  externa?: boolean;
  children: any;
  className?: string;
}

export default function Home(props: HomeProps) {
  return (
    <div
      className={`
            flex flex-col min-h-screen
            ${props.className ?? ""}
        `}
    >
      {props.children}
    </div>
  );
}
