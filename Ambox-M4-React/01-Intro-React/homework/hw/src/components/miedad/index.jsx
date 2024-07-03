import { useState } from "react";

/* Arrow Function */
const MiEdad = () => {
  const [key, setkey] = useState();
  const keyUp = (event) => {
    if(event.key === "a"){
      alert("Se presiono la tecla A")
    }
    setkey(event.key);
  };
  return (
    <div className="App">
      <h1>GeeksforGeeks</h1>
      {key ? <h2>Key UP : {key}</h2> : null}
      <input
        type="text"
        onKeyUp={keyUp}
        placeholder="Press & Release Key here..."
      />
    </div>
  );
};

/* 
camelCase

*/

export default MiEdad;
