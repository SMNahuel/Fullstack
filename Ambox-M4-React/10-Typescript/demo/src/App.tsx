import axios from "axios";
import { useEffect, useState } from "react";

//import Form from "./components/Form";
/* import TableOperation from "./components/Table";
import UpdateOperation from "./components/Update"; */
import CreateOperation from "./components/Create";

import s from "./style.module.css";
import "./App.css";

export type Operation = {
  type: string;
  mount: string;
  date: string;
  concept: string;
};

function App() {
  const [state, setState] = useState<{
    action: boolean;
    operation: Operation | {};
    product: Operation | null;
  }>({
    action: true /* Pivot para edicion o creación */,
    operation: {} /* Almacen de datos  */,
    product: null,
  });

  /* Este estado va a ser nuestro pivot */
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* Pedimos los datos */
    axios.get("http://localhost:3001/operation").then(({ data }: any) => {
      setState({
        ...state,
        operation: data,
      });
    });
  }, []);

  /* Finish */
  const onDelete = (id: number) => {
    //window.scroll(0, 0);

    setLoading(true);
    axios
      .delete(`http://localhost:3001/operation/${id}`)
      .then(({ data }) => {
        setState({
          ...state,
          operation: data,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onCreate = (input: Operation) => {
    setLoading(true);
    axios
      .post(`http://localhost:3001/operation`, input)
      .then(({ data }) => {
          setState({
            ...state,
            operation: data,
          });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onUpdate = (product: Operation) => {
    window.scroll(0, 0);
    setState({
      ...state,
      action: false,
      product: product,
    });
  };

  const handleUpdate = (id: number, input: Operation) => {
    setLoading(true);
    axios
      .put(`http://localhost:3001/operation/${id}`, input)
      .then(({ data }) => {
        setState({
          ...state,
          operation: data,
          action: true,
          product: null,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setState({
      ...state,
      action: true,
    });
  };

  return (
    <>
      <div>
        <CreateOperation onCreate={onCreate} />
      </div>
    </>
  );
}

export default App;
