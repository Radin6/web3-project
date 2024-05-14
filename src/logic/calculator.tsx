type calculateResultProps = {
  ATokensOwn: number,
  BTokensOwn: number,
  ATokensProp: number,
  BTokensProp: number,
  valueB: number,
}

export function calculateResult({
  ATokensOwn,
  BTokensOwn,
  ATokensProp,
  BTokensProp,
  valueB,
}: calculateResultProps) {

  // Total number of Token A if all were converted to Token A
  const totalInA = ATokensOwn + BTokensOwn/valueB;

  // Total number of Token B if all were converted to Token B
  const totalInB = BTokensOwn*valueB + BTokensOwn;

  const ratioAB = ATokensProp/BTokensProp;

  if (ATokensOwn/ratioAB < BTokensOwn) {
    console.log("Necesitas convertir Tokens A en Tokens B");
  } else if (ATokensOwn/ratioAB == BTokensOwn) {
    console.log("Están en proporción");
  } else {
    console.log("Necesitas convertir Tokens B en Tokens A");
  }
  
  return ("")
}