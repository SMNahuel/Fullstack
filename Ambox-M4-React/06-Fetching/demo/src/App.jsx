import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    nickname: "",
    password: "",
    countryCode: "+54",
    phoneNumber: "3794525146",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (event) => {
    // Actualizar el estado formData cuando cambian los campos del formulario
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post /* url */
      /* body */
      ();
    axios.get();
    axios.put();
    axios.delete();
    // Realizar la solicitud POST al servidor
    axios
      .post("http://localhost:3001/register", formData)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("La solicitud no fue exitosa: " + response.err);
        }

        if (!response.data) {
          throw new Error("La respuesta no es un JSON válido");
        }
        alert("registro exitoso");
      })
      .catch((error) => {
        if (error === 500) {
          throw new Error("La solicitud no fue exitosa: " + response.err);
          alert("Error");
        }
      });
    axios
      .delete("http://localhost:3001/users/1")
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("La solicitud no fue exitosa: " + response.err);
        }

        if (!response.data) {
          throw new Error("La respuesta no es un JSON válido");
        }
        alert("registro exitoso");
      })
      .catch((error) => {
        if (error === 500) {
          throw new Error("La solicitud no fue exitosa: " + response.err);
          alert("Error");
        }
      });

    /* PAra put debemos mandar el body y le params  */
    axios
      .put("http://localhost:3001/users/1", formData)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("La solicitud no fue exitosa: " + response.err);
        }

        if (!response.data) {
          throw new Error("La respuesta no es un JSON válido");
        }
        alert("registro exitoso");
      })
      .catch((error) => {
        if (error === 500) {
          throw new Error("La solicitud no fue exitosa: " + response.err);
          alert("Error");
        }
      });
  };

  function axiosCombined() {
    Promise.all([
      axios.get("http://localhost:3000/register", formData),
      axios.get("http://localhost:3000/users"),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then(([users, posts]) => {
        // Combinar los datos de usuarios y publicaciones según sea necesario
        const combinedData = { users, posts };
        // Almacenar los datos combinados en el estado de la aplicación
        setState(combinedData);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }

  return (
    <div>
      <h1>Enviar Datos al Servidor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          nickname:
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <p>Respuesta del servidor: {responseMessage}</p>}
    </div>
  );
}

export default App;

/* 

    <>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : state.length > 0 ? (
        <div>
          {state.map((item, index) => {
            return (
              /* En este caso estamos renderizando */
/*               <div key={index}>
                <h1>{item.name}</h1>
              </div>
            ); */
/* })} */
/*         </div> */
/*       ) : (
        <div>
          <h1>No hay usuarios</h1>
        </div>
      )} */
/*     </> */

/*   function fetchApi() {
    
    axios
      .get("http://localhost:3000/users")
      .then(function ({data}) {
        // handle success
        
        setState(data)
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    fetchApi();
  }, []); */
