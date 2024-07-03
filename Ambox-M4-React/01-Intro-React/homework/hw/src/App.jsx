import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MiNombre from "./components/minombre";
import MiEmail from "./components/miemail";
import MiEdad from "./components/miedad";
import Color from "./components/color";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Resolución HW 1</h1>
      <Color />
      <MiNombre />
      <MiEmail />

      <MiEdad />
    </div>
  );
}

export default App;
