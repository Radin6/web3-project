import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { hexaToNumber, wei2eth, eth2wei } from "../utils/utils";


export function WalletComponent() {
  const [hasProvider, setHasProvider] = useState<boolean | null>();
  const [wallet, setWallet] = useState<string>("");
  const [balance, setBalance] = useState<number | null>(null);
  const [chainId, setChainId] = useState<number | null>();
  const [walletTo, setWalletTo] = useState<string>("");
  const [ethAmount, setEthAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [signature, setSignature] = useState<string>("");

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      window.ethereum.request({
        method: "eth_chainId",
      })
        .then((_chainId: string) => setChainId(hexaToNumber(_chainId)))
        .catch((_error: string) => setError(_error));

      setHasProvider(Boolean(provider));

      if (provider) {
        window.ethereum.on('accountsChanged', (accounts: string[]) => onAccountChanged(accounts[0]))
        window.ethereum.on('chainChanged', handleWindowReload);
      }
    }

    getProvider();
  }, [])

  const handleWindowReload = () => {
    window.location.reload();
  }

  const handleConnect = () => {
    window.ethereum.request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => onAccountChanged(accounts[0]))
      .catch((_error: string) => setError(_error));
  }

  const onAccountChanged = (address: string) => {
    setWallet(address);
    getBalance(address);
  }

  const getBalance = (address: string) => {
    window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    })
      .then((_balance: string) => setBalance(wei2eth(hexaToNumber(_balance))))
      .catch((_error: string) => setError(_error));
  }

  const handleSendEth = () => {
    resetError();
    window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          to: walletTo,
          from: wallet,
          value: eth2wei(ethAmount).toString(16),
        }
      ]
    }).then((_txHash: string) => setTxHash(_txHash))
    .catch((_error: string) => setError(_error));
  }

  const handleSignMsg = () => {
    resetError();
    window.ethereum.request({
      method: "eth_signTypedData_v4",
      params: [wallet, msgParams],
    })
    .then((_signature: string) => setSignature(_signature))
    .catch((_error: string) => setError(_error));
  }

  const resetError = () => {setError("")}

  const msgParams = JSON.stringify({
    domain: {
      chainId: chainId?.toString(),
      name: "Ether Mail",
      version: "1",
    },
    message: {
      message,
    },
    primaryType: "Mail",
    types: {
      Mail: [{ name: "message", type: "string" }],
    },
  });

  return (
    <div>
      <div className="flex">
        {hasProvider ?
          <Button onClick={handleConnect}>{wallet ? "Connected" : "Connect"}</Button> :
          <p>There is not provider installed</p>}
      </div>
      <div>
        {wallet && <>
          <p>Address: {wallet?.substring(0, 6) + "..."}</p>
          <p>Balance: {balance?.toFixed(4)}</p>
          <p>Chain Id: {chainId}</p>
        </>}
      </div>
      <div className="flex flex-col gap-2 w-[400px] p-2 m-2 bg-blue-200">
        <p>Send a transaction</p>
        <input type="text" name="walletTo" onChange={(e) => setWalletTo(e.target.value)} placeholder="Destination wallet" />
        <input type="number" name="ethAmount" onChange={(e) => setEthAmount(Number(e.target.value))} placeholder="ETH Amounnt" />
        <Button onClick={handleSendEth}>Send ETH</Button>
        {txHash && 
          <p className="break-all">TxHash: {txHash}</p>}
      </div>
      <div className="flex flex-col gap-2 w-[400px] border p-2 m-2 bg-red-200">
        <p>Send a Message</p>
        <input type="text" name="message" placeholder="Write a message" onChange={(e)=>setMessage(e.target.value)}/>
        <Button onClick={handleSignMsg}>Sign</Button>
        {signature && 
          <p className="break-all">Signature: {signature}</p>}
      </div>
      <div>
        {error &&
        <>
          <p className="text-red-500 text-sm">{"Error: "+ error}</p>
          <button 
            className="text-sm border"
            onClick={resetError}>Delete error msg</button>
        </>}
        
      </div>
    </div>

  )
}

export default WalletComponent
