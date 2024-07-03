import { useState } from "react";
import MostrarContador from "./mostrarContador";

/* Nuestro primer componentente */
/* Va estar compuesta en una constate */
/* Un nombre que lo va identificar a lo largo y ancho de la aplicación */
/* Y sera igual a una funcion flecha () => {} */
const ButtonComponent = () => {
  /* Es un return  */

  /* El identificador */
  /* Y la funcion de set o actualizador de nuestro estado  */
  const [contador, setContador] = useState(1);

  return (
    <div>
      <MostrarContador contador={contador} />
      <button onClick={() => setContador(contador + 1)}>Click ME </button>
    </div>
  );
};

export default ButtonComponent;
