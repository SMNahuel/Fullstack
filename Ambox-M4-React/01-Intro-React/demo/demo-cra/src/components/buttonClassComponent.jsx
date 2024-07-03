import React, { Component } from "react";

// Definición de un componente de clase
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      user: {
        name: "NSM",
      },
      users: ["1"],
    };
  }

  componentDidMount() {
    console.log("El componente se montó");
  }

  componentDidUpdate() {
    console.log("El componente se actualizó");
  }

  componentWillUnmount() {
    console.log("El componente se desmontará");
  }

  render() {
    return (
      <div>
        <h1>Componente de Clase</h1>
        <p>Contador: {this.state.contador}</p>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Incrementar
        </button>
      </div>
    );
  }
}

export default ClassComponent;
