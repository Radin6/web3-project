export function hexaToNumber(hexaInput : string) {
  const numbers = parseInt(hexaInput);
  return numbers;
}

export function eth2wei(ethAmmount : number) : number {
  return ethAmmount*(10**18);
}

export function wei2eth(weiAmmount : number) : number {
  return weiAmmount/(10**18);
}