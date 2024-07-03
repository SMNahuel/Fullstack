import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState();
  const navigate = useNavigate();
  /* Hook para el manejo de ciclo de vida */
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(({ data }) => {
      setState(data);
    });
  }, []);

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
      {state &&
        state.results.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => navigate(`/pokemon/${item.url.split("/")[6]}`)}
              >
                <p>{item.name.toUpperCase()}</p>
              </button>
            </div>
          );
        })}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
