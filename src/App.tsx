import { useEffect, useState } from "react";
import { WalletComponent } from "./components/WalletComponent";

function App() {

  return (
    <>
      <div className="flex justify-between">
        <h1>Web3 App</h1>
        <WalletComponent />  
      </div>
      
    </>
  )
}

export default App
