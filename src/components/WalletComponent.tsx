import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { hexaToNumber, wei2eth } from "../utils/utils";

export function WalletComponent() {
  const [hasProvider, setHasProvider] = useState<boolean|null>();
  const [wallet, setWallet] = useState<string>()
  const [balance, setBalance] = useState<number>()
  const [chainId, setChainId] = useState<number|null>()

  useEffect(()=>{
    const getProvider = async() => {
      const provider = await detectEthereumProvider({silent: true});
      window.ethereum.request({
        method: "eth_chainId",
      }).then((_chainId)=>setChainId(hexaToNumber(_chainId)))
      .catch(e => console.log(e));
      setHasProvider(Boolean(provider));
    }
    getProvider();
  },[])

  const handleWindowReload = () => {
    window.location.reload();
  }

  window.ethereum.on('accountsChanged', (accounts) => onAccountChanged(accounts[0]))
  window.ethereum.on('chainChanged', handleWindowReload);

  const handleConnect = () => {
    window.ethereum.request({ method: "eth_requestAccounts" })
        .then((accounts: any) => onAccountChanged(accounts[0]))
        .catch((error: any) => console.log(error));
  }

  const onAccountChanged = (address : string) => {
    setWallet(address);
    getBalance(address);
  }

  const getBalance = (address: string) => {
      window.ethereum.request({ 
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((_balance: string) => setBalance(wei2eth(hexaToNumber(_balance))))
      .catch((error: any) => console.log(error));
    }

  return (
    <div>
      <div className="flex">
        {hasProvider ? 
          <Button onClick={handleConnect}>{wallet ? "Connected" : "Connect" }</Button> : 
          <p>There is not provider installed</p>}
      </div>
        {wallet && <>
          <p>Address: {wallet?.substring(0,6)+"..."}</p>
          <p>Balance: {balance?.toFixed(4)}</p>
          <p>Chain Id: {chainId}</p>
          </>}
    </div>
    
  )
}

export default WalletComponent
