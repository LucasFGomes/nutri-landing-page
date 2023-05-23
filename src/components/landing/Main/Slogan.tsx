export default function Slogan() {
  function renderizarFrase() {
    return (
      <div
        className={`
          flex flex-col items-center md:items-start text-4xl lg:text-6xl
          text-primary font-normal
        `}
      >
        <div className="flex gap-2.5">
          <div className={`relative`}>
            <span className="relative">Emagreça de</span>
          </div>
        </div>
        <div className="flex gap-2.5">
          <span>maneira prática</span>
        </div>
        <div className="flex gap-2.5">
          <span>e</span>
          <span className="font-semibold bg-pinkLight rounded">
            responsável
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      {renderizarFrase()}
      <div className="text-sm lg:text-lg font-light text-second text-center sm:text-left">
        <span>Cuide da sua saúde, o seu</span>
        <span className="font-medium text-primary"> bem mais precioso!</span>
      </div>
    </div>
  );
}
