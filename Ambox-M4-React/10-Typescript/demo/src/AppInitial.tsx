import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Person } from "./type";
import FormComponent from "./components/Form";

function App() {
  /* Datos simples */
  let nombre: string = "Nahuel";
  let edad: number = 28;
  let argentino: boolean = true;
  let aux: any;

  /* Datos completos */
  let array: Array<number> = [1, 2, 3, 4, 5];
  let arrayString: Array<String> = ["Nahuel", "Sanchez"];
  let persona: Person = {
    nombre,
    edad,
  };

  let newPerson: Person | number = 28;

  function saludar(nombre: string, persona?: Person): string {
    console.log("¡Hola mundo!");
    console.log(nombre);
    console.log(persona);
    /*@ts-ignore*/
    return argentino;
  }

  useEffect(() => {
    console.log(saludar(nombre));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <FormComponent
          datos={[
            { name: "Nombre", type: "string" },
            { name: "Edad", type: "number" },
            { name: "Sexo", type: "string"}
          ]}
        />
      </header>
    </div>
  );
}

export default App;
