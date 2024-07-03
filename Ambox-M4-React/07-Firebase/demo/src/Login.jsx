import { useState } from "react";
import { auth, signInWithGooglePopup, signInWithGithubPopup } from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./App.css";

function App() {
  /* Datos del registro con email y password */
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  /* Datos del login con email y password */
  const [stateLogin, setStateLogin] = useState({
    email: "",
    password: "",
  });

  /* Manejador de cambios en el estado de registro con email y password */
  const changeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  /* Manejador de cambios en el estado de login con email y password */
  const changeHandlerLogin = (event) => {
    setStateLogin({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  /* Funcion emite la accion de registrar */
  const registrarUsuario = async () => {
    try {
      await createUserWithEmailAndPassword(auth, state.email, state.password);
    } catch (err) {
      console.error(err);
    }
  };
  /* Funcion emite el evento de loguear */
  const loginUsuario = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        stateLogin.email,
        stateLogin.password
      ).then((response) => {
        console.log(response);
      });
    } catch (err) {
      alert("Credenciales erroneas");
      console.error(err);
    }
  };

  /* Funcion que emite el evento para loguear/registar con google */
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const logGithubUser = async () => {
    const response = await signInWithGithubPopup()
    console.log(response);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={changeHandler}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={changeHandler}
        />
        <button onClick={registrarUsuario}>Registrar</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={stateLogin.email}
          onChange={changeHandlerLogin}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={stateLogin.password}
          onChange={changeHandlerLogin}
        />
        <button onClick={loginUsuario}>Login</button>
      </div>

      <div>
        <button onClick={logGoogleUser}>Sign In With Google</button>
      </div>
      <div>
        <button onClick={logGithubUser}>Sign In With Github</button>
      </div>
      
    </div>
  );
}

export default App;
