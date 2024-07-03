import { useEffect, useState } from "react";
import TableOperation from "./components/Table";
import axios from "axios";

import CreateOperation from "./components/Create";
import UpdateOperation from "./components/Update";
import Form from "./components/Form";

import s from "./style.module.css";
import "./App.css";
function App() {
  const [state, setState] = useState({
    action: true /* Pivot para edicion o creación */,
    operation: {} /* Almacen de datos  */,
    product: null,
  });

  /* Este estado va a ser nuestro pivot */
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* Pedimos los datos */
    axios.get("http://localhost:3001/operation").then(({ data }) => {
      setState({
        ...state,
        operation: data,
      });
    });
  }, []);

  /* Finish */
  const onDelete = (id) => {
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

  const onCreate = (input) => {
    setLoading(true);
    axios
      .post(`http://localhost:3001/operation`, input)
      .then(({ data }) => {
        console.log(data),
          setState({
            ...state,
            operation: data,
          });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onUpdate = (product) => {
    window.scroll(0, 0);
    setState({
      ...state,
      action: false,
      product: product,
    });
  };

  const handleUpdate = (id, input) => {
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
      {loading ? (
        /* Cuando loading este true */
        <h1>Loading</h1>
      ) : (
        /* Cuando loading este false */
        <div>
          <div>
            {/* Opción 1 */}
            {false && (
              <>
                {state.action ? (
                  <CreateOperation onCreate={onCreate} />
                ) : (
                  <UpdateOperation
                    handleUpdate={handleUpdate}
                    operation={state.product}
                  />
                )}
              </>
            )}

            {/* Opcion 2 */}
            <Form
              onCreate={onCreate}
              handleUpdate={handleUpdate}
              operation={state.product}
              action={state.action}
              handleCancel={handleCancel}
            />
          </div>
          {state && (
            <TableOperation
              s={s}
              operations={state.operation}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;

/* {state.action === null && <CreateOperation />}
            {state.action === "update"}
            {state.action === "delete"} */
