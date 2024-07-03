const initialState = {
  contador: 0,

  name: "",
};

const contadorReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENTAR":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "DECREMENTAR":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default contadorReducer;
