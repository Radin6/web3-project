import {useState} from 'react';

const initialResult = {tokenA: null, tokenB: null}

export default function Home() {
  const [result, setResult] = useState(initialResult);

  const handleReset = () => {
    const inputElem = document.querySelectorAll('input');
    [...inputElem].map((elem) => elem.value = '');
    setResult(initialResult)
  }
  
  return (
    <main className="bg-main-light h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-[500px]  p-3 bg-green rounded-xl justify-center">
          <h1 className="text-xl text-center">Calculadora Pool</h1>
          <section>
            <h2 className="text-lg">Proporción</h2>
            <p>Ingresar la proporción de tokens que te pide la plataforma
              (por ejemplo si ponés 1 TokenA en la plataforma cuanto de pide de TokenB)</p>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token A</label>
              <input type="number" className="p-1 rounded-md bg-gray-light" placeholder="1" />
            </div>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token B</label>
              <input type="number" className="p-1 rounded-md bg-gray-light" placeholder="1.6" />
            </div>
          </section>
          <section>
            <h2 className="text-lg">Tengo</h2>
            <p>Ingresar la cantidad de cada token que posees</p>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token A</label>
              <input type="number" className="p-1 rounded-md bg-gray-light" placeholder="8.11" />
            </div>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token B</label>
              <input type="number" className="p-1 rounded-md bg-gray-light" placeholder="2.87" />
            </div>
          </section>
          <section>
            <h2 className="text-lg">Valor</h2>
            <p>Ingresar cuanto te darían del Token B si intercambiás 1 Token A por Tokens B (swap)</p>
            <div className="m-1">
              <label htmlFor="" className="p-1 mr-2">Token B</label>
              <input type="number" className="p-1 rounded-md bg-gray-light" placeholder="1.17" />
            </div>
          </section>
          <section className='flex gap-2'>
            <button className="bg-purple p-2 rounded-xl">Calcular</button>
            <button className="bg-orange p-2 rounded-xl" onClick={handleReset}>Reset</button>
          </section>
        </div>
      </div>
    </main>
  )
}