import { eth2wei } from "./utils";

type sendTransactionProps = {
  walletTo: string
  walletFrom: string
  value: number
}

export const sendTransaction = async({walletTo, walletFrom, value} : sendTransactionProps) => {
  
  const response = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        to: walletTo,
        from: walletFrom,
        value: eth2wei(value),
      }
    ]
  });

  return response;
}