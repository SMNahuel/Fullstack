import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase";
import "./App.css";
const App = () => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
  });

  const [person, setPerson] = useState([]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const guardarDatos = async () => {
    try {
      /* Agregar los datos a una colección */
      const docRef = await addDoc(collection(db, "person"), {
        person: state,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const pedirDatos = async () => {
    await getDocs(collection(db, "person")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPerson(newData);
      console.log(newData);
    });
  };

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
        <label>Nombre</label>
        <input
          value={state.name}
          onChange={(event) => handleChange(event)}
          name="name"
          type="text"
        />
        <label>Apellido</label>
        <input
          value={state.lastname}
          onChange={handleChange}
          name="lastname"
          type="text"
        />
        <button onClick={guardarDatos}>Guardar estos datos</button>
      </div>
      <button onClick={pedirDatos}>
        Pedir datos
      </button>
      {person.map((item, index) => {
        return <p key={index}>{item.person.name}</p>;
      })}
    </div>
  );
};
export default App;
