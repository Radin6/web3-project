import { useState } from 'react';
import { calculateResult } from '../../logic/calculator';

const initialResult = {
  message: '',
  quantity: 0,
}

const initialInput = {
  ATokensOwn: 0,
  BTokensOwn: 0,
  ATokensProp: 0,
  BTokensProp: 0,
  valueB: 0,
}

export default function Home() {
  const [result, setResult] = useState(initialResult);
  const [inputData, setInputData] = useState(initialInput);

  const handleReset = () => {
    const inputElem = document.querySelectorAll('input');
    [...inputElem].map((elem) => elem.value = '');
    setResult(initialResult);
    setInputData(initialInput);
  }

  const handleCalculate = () => {
    console.log(inputData);
    const newResult  = calculateResult(inputData);
    setResult(newResult);
    console.log("Result: ", newResult);
  }
  
  return (
    <main className="bg-main-light h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-[500px]  p-3 bg-green rounded-xl justify-center">
          <h1 className="text-xl text-center">Calculadora Pool</h1>
          <section>
            <h2 className="text-lg">Proporción</h2>
            <p>Ingresar la proporción de tokens que te pide la plataforma
              (por ejemplo si ponés 1 Token A en la plataforma cuanto de pide de Token B)</p>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token A</label>
              <input onChange={(e)=>setInputData({...inputData, ATokensProp: Number(e.target.value)})} type="number" className="p-1 rounded-md bg-gray-light" placeholder="1" />
            </div>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token B</label>
              <input onChange={(e)=>setInputData({...inputData, BTokensProp: Number(e.target.value)})} type="number" className="p-1 rounded-md bg-gray-light" placeholder="1.6" />
            </div>
          </section>
          <section>
            <h2 className="text-lg">Tengo</h2>
            <p>Ingresar la cantidad de cada token que posees</p>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token A</label>
              <input onChange={(e)=>setInputData({...inputData, ATokensOwn: Number(e.target.value)})} type="number" className="p-1 rounded-md bg-gray-light" placeholder="8.11" />
            </div>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token B</label>
              <input onChange={(e)=>setInputData({...inputData, BTokensOwn: Number(e.target.value)})} type="number" className="p-1 rounded-md bg-gray-light" placeholder="2.87" />
            </div>
          </section>
          <section>
            <h2 className="text-lg">Valor</h2>
            <p>Ingresar cuanto te darían del Token B si intercambiás 1 Token A por Tokens B (swap)</p>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token B</label>
              <input onChange={(e)=>setInputData({...inputData, valueB: Number(e.target.value)})} type="number" className="p-1 rounded-md bg-gray-light" placeholder="1.17" />
            </div>
          </section>
          <section className='flex gap-2 my-2'>
            <button onClick={handleCalculate} className="bg-purple p-2 rounded-xl">Calcular</button>
            <button onClick={handleReset} className="bg-orange p-2 rounded-xl">Reset</button>
          </section>
          <section className='mx-auto'>
          { (0 < result.quantity) && 
              <div className='m-2 bg-yellow p-2 rounded-lg'>
                <p>{result.message}</p>
                <p>Cantidad: {result.quantity}</p>
              </div>
            }
          </section>
        </div>
      </div>
    </main>
  )
}