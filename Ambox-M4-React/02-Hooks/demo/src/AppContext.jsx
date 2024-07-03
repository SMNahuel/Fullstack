import { createContext, useState } from "react";
import InputComponent from "./components/input";
import InputContext from "./components/inputContext";
import ButtonContext from "./components/buttonContext";

const ThemeContext = createContext();

const AppContext = () => {
  const [theme, setTheme] = useState("Contexto incial");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <InputContext />
        <button onClick={() => setTheme("contexto cambiado")}>Cambiar contexto</button>
      </ThemeContext.Provider>
    </>
  );
};

export { ThemeContext, AppContext };
