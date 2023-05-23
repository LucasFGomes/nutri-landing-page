import MenuItem from "./MenuItem";

interface MenuProps {
  className: string;
}

export default function Menu(props: MenuProps) {
  return (
    <div className={props.className}>
      <MenuItem url="#home">Início</MenuItem>
      <MenuItem url="#about">Sobre mim</MenuItem>
      <MenuItem url="#advantage">Benefícios</MenuItem>
      <MenuItem url="#nutritional-consultation">O que há na consulta?</MenuItem>
    </div>
  );
}
