# 5. Redux

En esta clase, los participantes aprenderán sobre React Redux, una biblioteca que facilita la administración del estado en aplicaciones React mediante la implementación de un contenedor de estado global.

# Introducción a Redux:

## ¿Qué es Redux?

Redux es una biblioteca de gestión de estado para aplicaciones JavaScript, especialmente útil en aplicaciones de una sola página (SPA) y aplicaciones web que manejan una gran cantidad de datos cambiantes. Redux se basa en el principio de que el estado de toda la aplicación está almacenado en un único árbol de estado inmutable.

Funciona mediante la creación de un almacén (store) centralizado que contiene el estado completo de la aplicación. Las actualizaciones de estado se realizan mediante acciones (actions), que son objetos planos que describen un cambio. Estas acciones se envían a través de reductores (reducers), funciones puras que especifican cómo se debe actualizar el estado en respuesta a una acción determinada.

Redux promueve un flujo de datos unidireccional, lo que hace que el manejo del estado sea predecible y más fácil de entender, especialmente en aplicaciones complejas. Esto lo convierte en una herramienta valiosa para mantener la coherencia del estado en aplicaciones grandes y escalables.

## Principios básicos de Redux: unidireccionalidad de datos almacenamiento inmutable, etc.

1. Unidireccionalidad de datos: En Redux, los datos fluyen en una sola dirección a través de la aplicación, lo que facilita el seguimiento del flujo de datos y el mantenimiento de la consistencia del estado.

2. Almacenamiento inmutable: El estado de la aplicación se almacena como un objeto inmutable. Esto significa que el estado no se modifica directamente, sino que se crea un nuevo estado cada vez que se produce un cambio. Esto facilita el seguimiento de los cambios y ayuda a prevenir errores comunes asociados con la manipulación directa del estado.

3. Acciones (Actions): Las acciones son objetos planos que representan eventos que ocurren en la aplicación. Describen qué tipo de acción se está realizando y, opcionalmente, incluyen datos asociados. Las acciones son enviadas por componentes de la interfaz de usuario y son la única forma de modificar el estado en Redux.

4. Reducers: Los reductores son funciones puras que especifican cómo cambia el estado en respuesta a una acción. Reciben el estado actual y una acción, y devuelven un nuevo estado. Es importante que los reductores sean funciones puras, ya que no deben realizar ninguna acción secundaria ni modificar el estado original.

5. Store (Almacén): El store es el objeto central de Redux que contiene el estado completo de la aplicación. Es responsable de almacenar, actualizar y distribuir el estado a los componentes de la aplicación. El store también proporciona métodos para suscribirse a cambios de estado y despachar acciones.

Estos principios trabajan en conjunto para crear un flujo de datos predecible y fácil de entender en aplicaciones basadas en Redux.

## Razones para usar Redux en aplicaciones React.

1. Gestión del estado escalable: A medida que las aplicaciones React crecen en tamaño y complejidad, puede volverse difícil gestionar el estado compartido entre componentes. Redux ofrece una solución escalable al proporcionar un almacén centralizado para todo el estado de la aplicación, lo que facilita su gestión y mantenimiento.

2. Flujo de datos unidireccional: Redux promueve un flujo de datos unidireccional, lo que significa que los datos fluyen en una sola dirección a través de la aplicación. Esto simplifica el seguimiento de cómo y dónde cambia el estado, lo que hace que el desarrollo y la depuración sean más sencillos.

3. DevTools para depuración: Redux ofrece herramientas de desarrollo (DevTools) que facilitan la depuración de la aplicación al permitirte ver y rastrear los cambios de estado a lo largo del tiempo. Esto es especialmente útil en aplicaciones complejas donde puede resultar difícil seguir el flujo de datos.

4. Separación de preocupaciones: Con Redux, puedes separar la lógica de presentación de la lógica de negocio y el estado de la aplicación. Los componentes de React pueden centrarse en representar la interfaz de usuario, mientras que Redux se encarga de la gestión del estado, lo que facilita la reutilización y la refactorización del código.

5. Compatibilidad con herramientas de terceros: Redux se integra bien con una variedad de herramientas de terceros, como middleware para manejar peticiones asíncronas, enrutadores para la navegación en la aplicación y bibliotecas de UI para crear interfaces de usuario ricas y dinámicas.

En resumen, Redux es una opción sólida para aplicaciones React que requieren una gestión avanzada del estado, un flujo de datos predecible y herramientas de desarrollo robustas para la depuración y el mantenimiento.

# Conceptos Fundamentales de Redux:

## Store: contenedor de estado único en la aplicación.

En Redux, el "store" es un contenedor de estado único que contiene toda la información relativa al estado de la aplicación. Este almacén es un objeto JavaScript que mantiene el estado de la aplicación y proporciona métodos para acceder a él, actualizarlo y registrar oyentes para cambios en el estado.

El store de Redux es único en toda la aplicación, lo que significa que todos los componentes de la interfaz de usuario tienen acceso al mismo estado global, lo que facilita el acceso y la actualización del estado en cualquier parte de la aplicación sin necesidad de pasar propiedades de componente a componente.

El store es esencialmente inmutable, lo que significa que no se puede modificar directamente. En su lugar, los cambios en el estado se realizan mediante acciones, que son objetos planos que describen qué tipo de cambio se desea realizar en el estado. Estas acciones se envían al store y son procesadas por los reductores, que son funciones puras que especifican cómo debe actualizarse el estado en respuesta a una acción específica.

En resumen, el store de Redux es el núcleo de la arquitectura de Redux y proporciona un punto centralizado para almacenar y administrar el estado de la aplicación en una aplicación React.

## Actions: objetos que describen un cambio de estado.

Las acciones en Redux son objetos simples que describen un cambio de estado en la aplicación. Estos objetos tienen una estructura básica que incluye al menos un tipo de acción, que es una cadena que identifica el tipo de cambio que se va a realizar.

Por ejemplo, una acción para cambiar el nombre de usuario podría tener un tipo como "CAMBIAR_NOMBRE_USUARIO". Además del tipo, una acción puede contener datos adicionales llamados carga útil (payload), que son la información necesaria para realizar el cambio de estado.

Aquí hay un ejemplo básico de una acción en Redux:

```javascript
const cambiarNombreUsuario = (nuevoNombre) => {
  return {
    type: "CAMBIAR_NOMBRE_USUARIO",
    payload: nuevoNombre,
  };
};
```

En este ejemplo, cambiarNombreUsuario es una función de acción que crea una acción para cambiar el nombre de usuario. La acción tiene un tipo "CAMBIAR_NOMBRE_USUARIO" y una carga útil nuevoNombre, que es el nuevo nombre de usuario que se va a establecer.

Una vez creada una acción, se envía al store utilizando el método dispatch. Los reductores de Redux luego procesan estas acciones y actualizan el estado en consecuencia.

Las acciones en Redux son fundamentales para el flujo de datos unidireccional y la gestión del estado en la aplicación. Proporcionan una forma clara y predecible de describir los cambios de estado, lo que hace que el desarrollo y la depuración sean más fáciles y menos propensos a errores.

## Reducers: funciones puras que especifican cómo cambia el estado en respuesta a una acción.

Los reductores en Redux son funciones puras que especifican cómo cambia el estado de la aplicación en respuesta a una acción. Estas funciones toman el estado actual y una acción como argumentos, y devuelven un nuevo estado que refleja el cambio realizado por esa acción.

Es importante destacar que los reductores deben ser funciones puras, lo que significa que deben seguir ciertas reglas:

1. Inmutabilidad: Los reductores nunca deben modificar el estado original. En su lugar, deben devolver un nuevo objeto de estado que refleje los cambios requeridos. Esto garantiza que el estado de la aplicación permanezca inmutable, lo que simplifica el seguimiento de los cambios y ayuda a prevenir errores inesperados.

2. Determinismo: Dado el mismo estado inicial y la misma acción, un reductor siempre debe devolver el mismo resultado. Esto significa que la lógica del reductor debe basarse únicamente en el estado actual y la acción recibida, sin depender de ningún estado externo o efecto secundario.

3. No efectos secundarios: Los reductores no deben realizar ningún efecto secundario, como llamadas a API, acceso a la base de datos o cambios en el DOM. Su única responsabilidad es calcular el próximo estado basado en la acción recibida.

Aquí hay un ejemplo básico de un reductor en Redux:

```javascript
const initialState = {
  contador: 0,
};

const contadorReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
```

En este ejemplo, contadorReducer es un reductor que gestiona el estado de un contador. Según la acción recibida, incrementará o decrementará el contador en uno. Si la acción no coincide con ninguno de los casos especificados en el switch, el reductor simplemente devuelve el estado actual sin realizar cambios.

Los reductores en Redux son fundamentales para la gestión del estado de la aplicación y ayudan a mantener un flujo de datos unidireccional y predecible.

# Instalación y Configuración de Redux:

## Instalación de la biblioteca Redux y React Redux.


Para instalar Redux y React Redux en tu proyecto, puedes seguir estos pasos:

Instalar Redux:
Puedes instalar Redux utilizando npm (Node Package Manager) o yarn. Abre tu terminal y ejecuta el siguiente comando:

```bash

npm install redux
```
O con yarn:

```bash
yarn add redux
```
Esto instalará la biblioteca Redux en tu proyecto.

Instalar React Redux:
React Redux es una librería que proporciona una integración entre Redux y React. Para instalar React Redux, ejecuta el siguiente comando en tu terminal:

```bash

npm install react-redux
```
O con yarn:

```bash

yarn add react-redux
```
Esto instalará React Redux en tu proyecto.

Una vez que hayas instalado Redux y React Redux, puedes comenzar a usar Redux en tu aplicación React. Recuerda que necesitarás importar redux y react-redux en tus archivos de código donde los vayas a utilizar. Por ejemplo:

```javascript

import { createStore } from 'redux';
import { Provider } from 'react-redux';
```
Con Redux instalado, puedes crear tu almacén (store), definir tus reductores y comenzar a integrar Redux en tus componentes React utilizando el Provider de React Redux para proporcionar el store a tu aplicación.

## Configuración de un store Redux en una aplicación React.

Para configurar un store Redux en una aplicación React, sigue estos pasos:

Instalar Redux y React Redux:
Si aún no lo has hecho, instala Redux y React Redux en tu proyecto como se explicó anteriormente.

Crear reductores:
Define los reductores que gestionarán el estado de tu aplicación. Puedes crear un archivo separado para cada reductor o combinar varios reductores en uno solo utilizando combineReducers de Redux.

Por ejemplo, supongamos que quieres crear un reductor para manejar el estado de un contador:

```javascript

// contadorReducer.js
const initialState = {
  contador: 0
};

const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        ...state,
        contador: state.contador + 1
      };
    case "DECREMENTAR":
      return {
        ...state,
        contador: state.contador - 1
      };
    default:
      return state;
  }
};

export default contadorReducer;
```
Crear el store:
En tu archivo principal de la aplicación (por lo general, index.js), importa createStore de Redux y los reductores que has definido. Luego, crea el store utilizando createStore y pasa los reductores como argumento.

```javascript

// index.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import contadorReducer from './contadorReducer';

const store = createStore(contadorReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
Proporcionar el store a la aplicación:
Utiliza el componente Provider de React Redux para proporcionar el store a tu aplicación. Envuelve tu componente raíz (en este caso, <App />) con el componente Provider y pasa el store como prop store.

```javascript

// App.js
import React from 'react';

const App = () => {
  return (
    <div>
      {/* Contenido de tu aplicación */}
    </div>
  );
};

export default App;
```
Con estos pasos, has configurado un store Redux en tu aplicación React y has proporcionado el store a todos los componentes de tu aplicación utilizando el componente Provider de React Redux. Ahora puedes comenzar a utilizar Redux en tus componentes para gestionar el estado de manera centralizada.

# Conectando Componentes a Redux:

## Uso del componente Provider para proporcionar el store a la aplicación.
El componente Provider es un componente proporcionado por React Redux que se utiliza para conectar el store de Redux a la aplicación React. Proporciona el contexto necesario para que los componentes de la aplicación puedan acceder al store y sus datos sin necesidad de pasarlos manualmente a través de las props.

Aquí tienes un ejemplo de cómo utilizar el componente Provider para proporcionar el store a la aplicación:

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Importa el combinador de reductores

import App from './App';

// Crea el store y pasa los reductores
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}> {/* Proporciona el store como prop 'store' */}
    <App />
  </Provider>,
  document.getElementById('root')
);
```
En este ejemplo:

Se importa Provider de react-redux.
Se importa createStore de redux para crear el store.
Se importa el combinador de reductores (rootReducer) que agrupa todos los reductores de la aplicación.
Se crea el store utilizando createStore y se pasa el rootReducer.
Se envuelve el componente <App /> con <Provider> y se pasa el store como prop store.
Finalmente, se utiliza ReactDOM.render() para renderizar la aplicación en el elemento con el id root del DOM.
Una vez que hayas configurado el componente Provider de esta manera, el store de Redux estará disponible para todos los componentes de tu aplicación React, y podrás acceder a él utilizando las funciones proporcionadas por React Redux, como connect() en componentes individuales para conectarlos al store y acceder al estado y a las acciones.

## Uso de la función connect() para conectar componentes a Redux y mapear el estado y las acciones a las props del componente.


La función connect() es una función proporcionada por React Redux que se utiliza para conectar componentes React al store de Redux. Esta función actúa como un conector que vincula el estado y las acciones del store a las props del componente, permitiendo que el componente acceda al estado y despache acciones de Redux.

Aquí tienes un ejemplo de cómo utilizar connect() para conectar un componente a Redux y mapear el estado y las acciones a las props del componente:

Supongamos que tenemos un componente llamado Counter que muestra un contador y tiene botones para incrementar y decrementar el contador. Queremos conectar este componente al store de Redux y mapear el estado del contador y las acciones de incremento y decremento a las props del componente.

```javascript

import React from 'react';
import { connect } from 'react-redux';

// Define el componente Counter
const Counter = ({ contador, incrementar, decrementar }) => {
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

// Define las funciones mapStateToProps y mapDispatchToProps
const mapStateToProps = (state) => ({
  contador: state.contador // Mapea el estado 'contador' del store a la prop 'contador'
});

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch({ type: 'INCREMENTAR' }), // Mapea la acción 'INCREMENTAR' a la prop 'incrementar'
  decrementar: () => dispatch({ type: 'DECREMENTAR' })  // Mapea la acción 'DECREMENTAR' a la prop 'decrementar'
});

// Conecta el componente Counter al store de Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
En este ejemplo:

Se importa connect de react-redux.
Se define el componente Counter que recibe las props contador, incrementar y decrementar.
Se definen las funciones mapStateToProps y mapDispatchToProps.
mapStateToProps mapea el estado del store a las props del componente.
mapDispatchToProps mapea las acciones de Redux a las props del componente.
Se utiliza connect() para conectar el componente Counter al store de Redux, pasando mapStateToProps y mapDispatchToProps como argumentos.
Se exporta el componente conectado utilizando export default connect(mapStateToProps, mapDispatchToProps)(Counter).
Con connect(), el componente Counter ahora tiene acceso al estado del contador y a las acciones de incremento y decremento a través de las props contador, incrementar y decrementar, respectivamente. Esto permite que el componente interactúe con el store de Redux y actualice el estado de la aplicación según sea necesario.


# Uso de Redux en Aplicaciones React:

## Dispatching de acciones para realizar cambios en el estado.

El envío o despacho de acciones (dispatching) en Redux es el proceso de enviar una acción al store de Redux para que se procese y se realicen los cambios correspondientes en el estado de la aplicación. Estas acciones son objetos simples que describen qué tipo de cambio se debe realizar en el estado.

Para despachar una acción en Redux, necesitas utilizar el método dispatch proporcionado por el store. Aquí tienes un ejemplo de cómo despachar acciones para realizar cambios en el estado:

Supongamos que tienes una acción llamada INCREMENTAR que debe incrementar el valor de un contador en 1, y una acción llamada DECREMENTAR que debe decrementar el valor del contador en 1. Estas acciones son manejadas por un reductor que actualiza el estado en consecuencia.

```javascript

// Importa createStore y combineReducers de Redux
import { createStore, combineReducers } from 'redux';

// Define un reductor para el contador
const contadorReducer = (state = { contador: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return { contador: state.contador + 1 };
    case 'DECREMENTAR':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
};

// Combina los reductores si hay varios reductores en la aplicación
const rootReducer = combineReducers({
  contador: contadorReducer
});

// Crea el store y pasa los reductores combinados
const store = createStore(rootReducer);

// Despacha acciones para realizar cambios en el estado
store.dispatch({ type: 'INCREMENTAR' }); // Incrementa el contador
store.dispatch({ type: 'DECREMENTAR' }); // Decrementa el contador

// Obtiene el estado actual del store
const estadoActual = store.getState();
console.log(estadoActual); // Output: { contador: 0 }
```
En este ejemplo:

1. Se define un reductor (contadorReducer) que maneja las acciones INCREMENTAR y DECREMENTAR para actualizar el estado del contador.
2. Se combina el reductor utilizando combineReducers.
3. Se crea el store utilizando createStore y se pasa el reductor combinado (rootReducer).
4. Se utilizan los métodos dispatch() para despachar las acciones INCREMENTAR y DECREMENTAR, lo que provoca cambios en el estado del contador.
5. Se utiliza getState() para obtener el estado actual del store después de despachar las acciones.
6. Se imprime el estado actual en la consola.
De esta manera, puedes utilizar el método dispatch() para enviar acciones al store y realizar cambios en el estado de la aplicación en Redux.

## Acceso al estado global en componentes conectados.


Para acceder al estado global en componentes conectados a Redux, puedes utilizar el método mapStateToProps. Este método permite mapear parte del estado global de Redux a las props del componente conectado. Luego, puedes acceder a estas props en el componente para obtener el estado deseado.

Aquí tienes un ejemplo de cómo acceder al estado global en un componente conectado:

Supongamos que tienes un estado global en Redux que contiene un contador:

```javascript

// Estado inicial
const initialState = {
  contador: 0
};

// Reductor
const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return { ...state, contador: state.contador + 1 };
    case 'DECREMENTAR':
      return { ...state, contador: state.contador - 1 };
    default:
      return state;
  }
};

// Crear el store
const store = createStore(contadorReducer);
```
Ahora, conecta un componente a Redux utilizando connect() y mapStateToProps para acceder al estado global:

```javascript

import React from 'react';
import { connect } from 'react-redux';

// Define el componente conectado
const Contador = ({ contador }) => {
  return (
    <div>
      <p>Contador: {contador}</p>
    </div>
  );
};

// Mapea el estado global a las props del componente
const mapStateToProps = (state) => ({
  contador: state.contador // Accede al estado 'contador' del estado global
});

// Conecta el componente al store de Redux
export default connect(mapStateToProps)(Contador);
```
En este ejemplo:

1. mapStateToProps recibe el estado global de Redux como argumento y mapea la propiedad contador del estado a la prop contador del componente.
2. El componente Contador recibe la prop contador y la utiliza para mostrar el valor del contador en la interfaz de usuario.
3. Cuando conectas un componente a Redux de esta manera, el componente tendrá acceso al estado global a través de las props que se le pasan. Esto te permite acceder y mostrar el estado en el componente de React según sea necesario.

## Actualización del estado a través de reducers.
En Redux, la actualización del estado se realiza a través de reductores (reducers). Los reductores son funciones puras que especifican cómo cambia el estado en respuesta a una acción determinada. Estas funciones toman el estado actual y una acción como argumentos, y devuelven un nuevo estado que refleja los cambios realizados por esa acción.

Aquí hay un ejemplo de cómo se actualiza el estado a través de un reductor en Redux:

Supongamos que tienes un estado inicial y un reductor para manejar acciones relacionadas con un contador:

```javascript

// Estado inicial
const initialState = {
  contador: 0
};

// Reductor
const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return { ...state, contador: state.contador + 1 }; // Incrementa el contador
    case 'DECREMENTAR':
      return { ...state, contador: state.contador - 1 }; // Decrementa el contador
    default:
      return state; // Devuelve el estado sin cambios si la acción no es reconocida
  }
};
```
En este ejemplo:

1. El estado inicial contiene una propiedad contador con un valor inicial de 0.
2. El reductor contadorReducer maneja las acciones INCREMENTAR y DECREMENTAR.
3. Cuando se recibe la acción INCREMENTAR, se devuelve un nuevo estado con el contador incrementado en 1.
4. Cuando se recibe la acción DECREMENTAR, se devuelve un nuevo estado con el contador decrementado en 1.
5. Si la acción no coincide con ninguno de los casos anteriores, se devuelve el estado actual sin cambios.
6. Después de definir el reductor, puedes utilizarlo para crear el store de Redux:

```javascript

import { createStore } from 'redux';

// Crear el store y pasar el reductor
const store = createStore(contadorReducer);
```
Una vez que tienes el store configurado, puedes despachar acciones para realizar cambios en el estado:

```javascript

// Despachar una acción para incrementar el contador
store.dispatch({ type: 'INCREMENTAR' });

// Despachar una acción para decrementar el contador
store.dispatch({ type: 'DECREMENTAR' });
```
Cada vez que se despacha una acción, el reductor correspondiente se ejecuta con el estado actual y la acción, y devuelve un nuevo estado que refleja los cambios realizados por esa acción. Esto asegura que el estado de la aplicación se actualice de manera predecible y controlada en toda la aplicación.