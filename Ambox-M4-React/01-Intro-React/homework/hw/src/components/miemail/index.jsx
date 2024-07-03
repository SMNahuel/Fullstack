import { useState } from "react";

/* Arrow Function */
const MiEmail = () => {
  const [state, setState] = useState("Nahuel@gmail.com");
  return (
    <div>
      <h2>Mi Email</h2>
      <p>{state}</p>
      <input
        type="email"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default MiEmail;
