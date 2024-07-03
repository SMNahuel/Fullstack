import { useState } from "react";

/* Arrow Function */
const Color = () => {
  const [state, setState] = useState("red");
  return (
    <div>
      <h2>Mi Nombre</h2>
      <p>{state}</p>
      <select
        style={{borderRadius : "30px"}}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      >
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"orange"}>Orange</option>
        <option value={"yellow"}>Yellow</option>
      </select>
    </div>
  );
};

export default Color;
