import { useState } from "react";
import axios from "axios";
import "./style.css";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    nickname: "",
  });

  const handleSumbit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/user/register", input)
    .then(r => {
        console.log(r)
    })
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSumbit}>
        <input
          name="email"
          id="Email"
          type="email"
          required
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          placeholder="Ingrese su email"
        />

        <input
          name="password"
          id="pasword"
          type="password"
          required
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          placeholder="Ingrese su password"
        />
        <input
          name="repeatPassword"
          id="repeatPassword"
          type="password"
          required
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          placeholder="Repita su password"
        />

        <input
          name="name"
          id="name"
          type="text"
          required
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          placeholder="Ingrese su nombre"
        />

        <input
          name="lastName"
          id="lastName"
          type="text"
          required
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          placeholder="Ingrese su apellido"
        />

        <input
          name="nickname"
          id="nickname"
          type="text"
          required
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          placeholder="Ingrese su nickname"
        />
        <button type="submit"> Registrar </button>
      </form>
    </div>
  );
};

export default Register;
