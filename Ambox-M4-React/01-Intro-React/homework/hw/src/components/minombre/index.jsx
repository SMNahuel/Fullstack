import { useState } from "react";

/* Arrow Function */
const MiNombre = () => {
  const [state, setState] = useState("Nahuel");
  return (
    <div>
      <h2>Mi Nombre</h2>
      <p>{state}</p>
      <input
        type="text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default MiNombre;
