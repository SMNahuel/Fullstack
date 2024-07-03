import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputComponent from "./components/input";
import axios from 'axios'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");

      setLoading(false);
    };

    fetchData();
  }, []);

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Nahuel",
  });
  const [titulo, setTitulo] = useState("React App"); 

  // useEffect para mostrar un mensaje de saludo cuando el componente se monta
    useEffect(() => {
    console.log("El componente se montó");
    return () => {
      console.log("El componente se desmontó");
    };
  }, []); 
  // La matriz de dependencias está vacía, por lo que este efecto solo se ejecuta una vez

  // useEffect para mostrar un mensaje cuando el título de la página se actualiza
   useEffect(() => {
    document.title = titulo;
  }, [titulo]);
   // Este efecto se ejecuta cada vez que cambia el título

  // Función para cambiar el título de la página
     const cambiarTitulo = () => {
    const nuevoTitulo = prompt("Ingrese un nuevo título:");
    if (nuevoTitulo) {
      setTitulo(nuevoTitulo);
    }
  };

  useEffect(() => {
    console.log(user);
    return () => {
      setUser("Muerto");
    };
  }, [user]);

  useEffect(() => {
    console.log(count);
    return () => {
      setCount(0);
      console.log("Este efecto se limpia");
    };
  }, [count]);

  return (
    <>
             <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={"logo"} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{`¡Hola! Bienvenido a ${titulo}`}</h2>
      <button onClick={cambiarTitulo}>Cambiar título</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <InputComponent setUser={setUser} />
        {user.name}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      <div>{loading ? <p> Loading </p> : <p>Se cargo todo</p>}</div>
    </>
  );
}

export default App;
