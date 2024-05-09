import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export function WalletComponent() {
  const [hasProvider, setHasProvider] = useState<boolean>();

  useEffect(()=>{
    const getProvider = async() => {
      const provider = await detectEthereumProvider({silent: true});
      setHasProvider(Boolean(provider));
    }
    getProvider();
  },[])

  return (
    <>
      {hasProvider ? <Button>Connect</Button> : <p>There is not provider installed</p>}
    </>
  )
}

export default WalletComponent
