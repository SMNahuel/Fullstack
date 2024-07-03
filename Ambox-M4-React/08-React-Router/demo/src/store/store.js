// strore.js
const initialState = {
  pokemon: [],
  pokemonFav: [],
};

const strore = (state = initialState, action) => {
  switch (action.type) {
    case "PEDIR":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "AGREGAR":
      return {
        ...state,
        pokemonFav: action.payload,
      };
    case "ELIMINAR":
      return {
        ...state,
        pokemonFav: action.payload,
      };
    default:
      return state;
  }
};

export default strore;
