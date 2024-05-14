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

  const result = {message: '', quantity: 0}

  // Total number of Token A if all were converted to Token A
  const totalInA = ATokensOwn + BTokensOwn/valueB;

  // Total number of Token B if all were converted to Token B
  const totalInB = BTokensOwn*valueB + BTokensOwn;

  // Ratio of A over B
  const ratioAB = ATokensProp/BTokensProp;

  // Percentage of A over B if we convert A to B equvalent
  const percentageAB = ATokensProp*valueB/(ATokensProp*valueB+BTokensProp)

  if (ATokensOwn/ratioAB < BTokensOwn) {
    result.message = "Necesitas convertir Tokens B en Tokens A";
    const newQuantity = totalInB - totalInB*(1-percentageAB) - ATokensOwn*valueB;
    result.quantity = newQuantity;

  } else if (ATokensOwn/ratioAB == BTokensOwn) {
    result.message = "Están en proporción";
    result.quantity = 0;

  } else {
    result.message = "Necesitas convertir Tokens A en Tokens B";
    const newQuantity = totalInA - totalInA*percentageAB - BTokensOwn/valueB;
    result.quantity = newQuantity;
  }
  
  return (result)
}