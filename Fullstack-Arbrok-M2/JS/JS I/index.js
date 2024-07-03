const exampleArray = [
  {
    name: "nahuel",
    lastName: "sanchez" /* 0 */,
  },
  {
    name: "dardo",
    lastName: "B" /* 1 */,
  },
  {
    name: "Lucas",
    lastName: "A" /* 2 */,
  },
  {
    name: "Silvana",
    lastName: "B" /* 3 */,
  },
];

function pedirDatos() {}
function enviarDatos() {
  const user = null;

  /* OPERADOR AND  */
  /* 
        para saber la longitud de un array
        len + gallina tiene huevos 
        length
    */
  var p = document.createElement("p");


  for (let i = 0; i < exampleArray.length; i++) {
    // | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
    document.getElementById(
      "contenedorAlumnos"
    ).innerHTML = `<p>${exampleArray[i].name}</p>`;
  }
  return;
}
function eliminarDatos() {}
