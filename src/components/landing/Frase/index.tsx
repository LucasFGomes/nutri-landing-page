import Area from "../Common/Area";

export function Frase() {
  return (
    <Area className="bg-gray-100 py-8">
      <h3 className="text-sm text-center text-primary italic">
        {`"Você não vai mudar os seus hábitos da noite pro dia, mas você precisa
          começar!"`}
      </h3>
      <p className="text-xs text-center text-primary">
        Nutricionista Renata Ferreira - CRN 43501/PE
      </p>
    </Area>
  );
}
