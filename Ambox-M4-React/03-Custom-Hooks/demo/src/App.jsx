import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useContador from "./customHook/useConador";
import useFetch from "./customHook/useFetch";
import "./App.css";
import useForm from "./customHook/useForm";

function App() {
  /* const [count, setCount] = useState(0) */
  const { count, decrementar, incrementar, reset } = useContador();
  const { result, backPage, nextPage } = useFetch();
  const { values, handleChange, resetForm } = useForm();

  useEffect(()=>{
    console.log(localStorage.getItem("user"))
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {false && (
        <div className="card">
          count is {count}
          <button onClick={() => incrementar()}>Incremetrar</button>
          <button onClick={() => decrementar()}>Decrementar</button>
          <button onClick={() => reset()}>Resetear</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      )}
      {false && (
        <>
          <div>
            {result &&
              result.results.map((item, index) => {
                return <div key={index}>{item.name}</div>;
              })}
          </div>
          <button onClick={() => backPage()}>Atras</button>
          <button onClick={() => nextPage()}>Siguiente</button>
        </>
      )}

      <div>
        <label for="name"></label>
        <input id="name" name="name" onChange={handleChange} />
        <label for="lastName"></label>
        <input id="lastName" name="lastName" onChange={handleChange} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
