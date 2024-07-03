import { useState } from "react";

// Custom Hook para manejar el estado de un contador
function useContador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementar = () => {
    if (count === 0) return;
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0)
  }

  return { count, incrementar, decrementar, reset };
}

export default useContador;
