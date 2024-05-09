import { eth2wei } from "./utils";

type sendTransactionProps = {
  walletTo: string,
  walletFrom: string,
  value: number,
}

export const sendTransaction = ({walletTo, walletFrom, value} : sendTransactionProps) => {
  window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        to: walletTo,
        from: walletFrom,
        value: eth2wei(value),
      }
    ]
  }).then(_txHash => _txHash);
}