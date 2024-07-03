import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook para manejar el estado de un contador
function useFetch() {
  const [result, setResult] = useState();


  useEffect(() => {
      async function fetch() {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    
        setResult(data);
      }
      fetch()
  },[]);
  const nextPage = async () => {
    const { data } = await axios.get(result.next);
    
    setResult(data);
  };

  const backPage = async () => {
    if(!result.previous) return
    const { data } = await axios.get(result.previous);
    
    setResult(data);
  };

  return { result, nextPage, backPage };
}

export default useFetch;
