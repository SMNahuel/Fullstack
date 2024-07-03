import { useState } from "react";

const InputComponent = ({setUser}) => {

  const [aux, setAux] = useState();
  return (
    <>
      <input type="text" onChange={(e) => setAux(e.target.value)} />
      <button onClick={() => setUser({ name: aux })}>Change Name</button>
    </>
  );
};

export default InputComponent;
