import React, { useEffect, useState } from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import { useParams } from "react-router";
import { connect } from "react-redux";

import axios from "axios";

const CardPokemon = ({ agregar, eliminar, pokemonFav }) => {
  const { id } = useParams();

  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => {
        setState(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAdd = () => {
    var data = pokemonFav;
    data.push(state);
    agregar(data);
  };

  const handleDelete = () => {
    var data = pokemonFav;
    var aux = data.filter((item) =>  item.name !== state.name)
    console.log(aux)
    eliminar(aux)
  }

  return (
    <>
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <>
          {state && (
            <Card>
              <Image src={state.sprites.front_default} wrapped ui={false} />
              <CardContent>
                <CardHeader>{state.name.toUpperCase()}</CardHeader>
                <CardMeta>
                  <span className="date">Joined in 2015</span>
                </CardMeta>
              </CardContent>
              <CardContent extra>
                <button
                  onClick={() => {
                    handleAdd(state);
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    handleDelete(state);
                  }}
                >
                  Delete
                </button>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  pokemonFav: state.pokemonFav,
});

const mapDispatchToProps = (dispatch) => ({
  agregar: (data) => dispatch({ type: "AGREGAR", payload: data }), // Mapea la acción 'INCREMENTAR' a la prop 'incrementar'
  eliminar: (data) => dispatch({ type: "ELIMINAR", payload: data }), // Mapea la acción 'DECREMENTAR' a la prop 'decrementar'
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPokemon);
