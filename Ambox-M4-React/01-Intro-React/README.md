# 1. Intro React

# ¿Qué es React?

## Breve introducción a React.

React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y dinámicas en aplicaciones web. Desarrollada por Facebook, React se ha convertido en una de las herramientas más populares para la creación de interfaces de usuario modernas.

La principal característica de React es su enfoque en la creación de componentes reutilizables. Los componentes son piezas de la interfaz de usuario que encapsulan la estructura y el comportamiento, lo que facilita la construcción y el mantenimiento de aplicaciones complejas. Estos componentes pueden ser simples, como un botón o un formulario, o más complejos, como un menú desplegable o una tabla de datos.

React utiliza un enfoque basado en el concepto de "virtual DOM" (DOM virtual) para optimizar el rendimiento de las aplicaciones. En lugar de actualizar directamente el DOM del navegador cada vez que cambia el estado de la aplicación, React compara la representación virtual del DOM con la versión actual y solo actualiza los elementos que han cambiado. Esto minimiza la cantidad de manipulación del DOM real, lo que resulta en una experiencia de usuario más fluida y receptiva.

Además, React se integra fácilmente con otras bibliotecas y herramientas, lo que lo hace altamente adaptable a una variedad de proyectos y entornos de desarrollo. Su popularidad ha llevado a una amplia comunidad de desarrolladores que contribuyen con bibliotecas, herramientas y recursos adicionales para facilitar el desarrollo de aplicaciones con React.

En resumen, React es una potente biblioteca de JavaScript que simplifica el desarrollo de interfaces de usuario dinámicas y eficientes, mediante el uso de componentes reutilizables y el concepto de DOM virtual.

# Características principales.

Las características principales de React incluyen:

1. **Componentes reutilizables:** React permite la creación de componentes independientes y reutilizables que encapsulan la funcionalidad y la interfaz de usuario. Estos componentes pueden ser fácilmente compartidos y utilizados en diferentes partes de la aplicación, lo que promueve la modularidad y el mantenimiento del código.

2. **Virtual DOM:** React utiliza un DOM virtual para representar la estructura de la interfaz de usuario en memoria. Esta representación virtual permite que React realice actualizaciones eficientes en el DOM real del navegador, minimizando la cantidad de manipulación y rendiendo la interfaz de usuario de manera más rápida.

3. **JSX (JavaScript XML):** JSX es una extensión de JavaScript que permite escribir código HTML dentro de JavaScript. Con JSX, los desarrolladores pueden definir la estructura de la interfaz de usuario de manera declarativa y visualmente intuitiva, integrando el HTML directamente en el código JavaScript de los componentes de React.

4. **Unidireccionalidad de datos:** React sigue el patrón de flujo de datos unidireccional, lo que significa que los datos fluyen en una sola dirección, desde los componentes "padre" hacia los componentes "hijos". Esto simplifica el seguimiento del flujo de datos y facilita el mantenimiento de la aplicación, especialmente en aplicaciones de gran escala.

5. **Estado y ciclo de vida del componente:** Los componentes de React pueden tener un estado interno que determina su comportamiento y apariencia. React gestiona el ciclo de vida de los componentes, permitiendo ejecutar código en diferentes etapas, como la creación, actualización y destrucción de un componente, lo que facilita la gestión de la lógica y la interacción del usuario.

6. **Comunidad activa y ecosistema extenso:** React cuenta con una comunidad activa de desarrolladores que contribuyen con bibliotecas, herramientas y recursos adicionales para facilitar el desarrollo de aplicaciones. Además, React se integra fácilmente con otras bibliotecas y herramientas populares, como Redux para la gestión del estado y React Router para la navegación en aplicaciones de una sola página (SPA).

En resumen, las características principales de React incluyen la creación de componentes reutilizables, el uso del DOM virtual para optimizar el rendimiento, JSX para escribir código HTML dentro de JavaScript, el flujo unidireccional de datos, la gestión del estado y ciclo de vida del componente, y una comunidad activa con un extenso ecosistema de herramientas y bibliotecas.

# Creación de Componentes

## Componentes funcionales vs. componentes de clase.

En React, hay dos tipos principales de componentes: componentes funcionales y componentes de clase. A continuación, se describen las características principales de cada uno:

## Componentes Funcionales:

1. **Sintaxis más concisa:** Los componentes funcionales son funciones de JavaScript que devuelven elementos de React (usualmente JSX). Esto hace que la sintaxis sea más concisa y fácil de entender en comparación con los componentes de clase.

2. **Menor código y más legibilidad:** Al no requerir la definición de una clase y los métodos asociados, los componentes funcionales tienden a tener menos código, lo que los hace más fáciles de leer y mantener.

3. **Uso de Hooks:** Desde la introducción de los Hooks en React (a partir de la versión 16.8), los componentes funcionales pueden tener estado y otras características previamente limitadas a los componentes de clase. Los Hooks permiten el uso de estado, efectos secundarios y otros features de React en componentes funcionales, eliminando la necesidad de usar clases.

4. **Mejor rendimiento:** Los componentes funcionales pueden tener un mejor rendimiento que los componentes de clase, ya que no tienen la sobrecarga asociada con la creación y la instancia de una clase.

## Componentes de Clase:

1. **Estado y ciclo de vida:** Los componentes de clase permiten el uso del estado interno y la gestión del ciclo de vida a través de métodos de ciclo de vida como **_componentDidMount_**, **_componentDidUpdate_**, y **_componentWillUnmount_**. Estos métodos son útiles para realizar acciones como la inicialización de datos, la gestión de efectos secundarios, y la limpieza de recursos cuando un componente se monta, se actualiza o se desmonta.

2. **Contexto de this:** En los componentes de clase, this se refiere al contexto de la instancia de la clase, lo que permite acceder a métodos y propiedades de la instancia. Esto puede ser útil en ciertos escenarios, como la vinculación de manejadores de eventos o el acceso al estado local.

3. **Compatibilidad con versiones anteriores:** Los componentes de clase han sido la forma tradicional de definir componentes en React y son compatibles con versiones anteriores de la biblioteca. Muchas bases de código existentes pueden utilizar componentes de clase y aún necesitarán mantenerlos para garantizar la compatibilidad.

En resumen, los componentes funcionales son preferidos en la mayoría de los casos debido a su sintaxis más concisa, facilidad de uso con Hooks, y mejor rendimiento. Sin embargo, los componentes de clase aún tienen su lugar en situaciones donde se requiere el uso de estado interno, métodos de ciclo de vida específicos, o se necesita mantener la compatibilidad con versiones anteriores de React.

**_Ejemplo_**

Componente Funcional:

```jsx
import React from "react";

// Definición de un componente funcional
const FunctionalComponent = () => {
  return (
    <div>
      <h1>Componente Funcional</h1>
      <p>Este es un ejemplo de un componente funcional en React.</p>
    </div>
  );
};

export default FunctionalComponent;
```

En este ejemplo, FunctionalComponent es un componente funcional que simplemente renderiza un encabezado y un párrafo. No tiene estado ni métodos de ciclo de vida.

Componente de Clase:

```jsx
import React, { Component } from "react";

// Definición de un componente de clase
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
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

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h1>Componente de Clase</h1>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default ClassComponent;
```

# JSX: Sintaxis para escribir componentes.

JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que permite escribir código HTML directamente dentro de JavaScript. Esta sintaxis facilita la creación de interfaces de usuario en React. Aquí tienes un ejemplo de cómo se utiliza JSX para escribir componentes en React:

```jsx
import React from "react";

// Definición de un componente funcional utilizando JSX
const MyComponent = () => {
  return (
    <div>
      <h1>Hola, Mundo!</h1>
      <p>Este es un componente escrito en JSX.</p>
    </div>
  );
};

export default MyComponent;
```

En este ejemplo:

- La función MyComponent es un componente funcional de React.
- Dentro de la función, se utiliza JSX para definir la estructura de la interfaz de usuario.
- Los elementos HTML como **`<div>`**, **`<h1>`**, y **`<p>`** se escriben directamente dentro del código JavaScript.
- Los elementos JSX pueden contener atributos HTML y también pueden incrustar expresiones de JavaScript entre llaves {}.

JSX facilita la escritura de código más legible y expresivo al combinar la lógica de JavaScript con la estructura de marcado HTML dentro de un solo archivo. Luego, durante el proceso de compilación, JSX se transpila a llamadas de funciones React que crean elementos virtuales en el DOM. Esto permite que React renderice la interfaz de usuario de manera eficiente.

# Props y State: Manipulación de datos en componentes.

En React, tanto props como state son mecanismos fundamentales para manejar datos dentro de los componentes. A continuación, explicaré cada uno y cómo se utilizan para manipular datos en los componentes.

## Props (Propiedades):

Las **props** son objetos de solo lectura que contienen datos que un componente puede recibir de su componente padre. Estos datos se pasan como atributos en la instancia del componente al ser renderizado. Las **props** son inmutables, lo que significa que un componente no puede cambiar sus propias **props**; solo puede leerlas. Aquí hay un ejemplo de cómo se utilizan las **props**:

```jsx
import React from "react";

// Definición de un componente funcional que recibe props
const Welcome = (props) => {
  return <h1>Hola, {props.name}!</h1>;
};

// Uso del componente Welcome con props
const App = () => {
  return <Welcome name="Juan" />;
};

export default App;
```

En este ejemplo, el componente **Welcome** recibe las **props** a través del parámetro **props**. En la función de renderizado, accede a la propiedad name de las **props** para mostrar un mensaje de bienvenida personalizado.

## State (Estado):

El **state** es un objeto que representa el estado interno de un componente. Es gestionado internamente por el componente y puede cambiar a lo largo del tiempo en respuesta a acciones del usuario, eventos u otros factores. Solo los componentes de clase pueden tener estado; los componentes funcionales utilizarían Hooks para manejar el estado. Aquí hay un ejemplo de cómo se utiliza el **state** en un componente de clase:

```jsx
import React, { Component } from "react";

// Definición de un componente de clase con estado
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
```

En este ejemplo, el componente **Counter** tiene un estado interno **count**, que se inicializa en 0 en el constructor. El método **incrementCount** actualiza el estado **count** cuando se hace clic en el botón, lo que hace que el componente vuelva a renderizarse con el nuevo valor del estado.

En resumen, **props** se utiliza para pasar datos de un componente padre a un componente hijo, mientras que **state** se utiliza para gestionar el estado interno de un componente y se puede modificar a lo largo del tiempo para reflejar cambios en la interfaz de usuario.

# Enrutamiento en React

## Introducción a React Router.

React Router es una biblioteca de enrutamiento para React que permite la navegación y el enrutamiento de manera declarativa en aplicaciones de una sola página (SPA). Facilita la creación de rutas dentro de la aplicación y la renderización de componentes específicos según la URL actual del navegador.

Algunas características principales de React Router incluyen:

1. **Declarativo:** React Router utiliza una sintaxis declarativa que permite definir las rutas de la aplicación de forma clara y legible. Esto facilita la comprensión del enrutamiento y la navegación en la aplicación.

2. **Gestión de historial:** React Router maneja el historial del navegador y proporciona una API para navegar hacia adelante y hacia atrás en el historial de navegación. Esto permite una experiencia de navegación suave y coherente en la aplicación.

3. **Anidamiento de rutas:** Es posible anidar rutas dentro de otras rutas en React Router, lo que permite una estructura jerárquica de enrutamiento en la aplicación. Esto es útil para organizar las rutas de manera lógica y modular.

4. **Renderizado condicional:** React Router permite definir qué componente se debe renderizar en función de la ruta actual del navegador. Esto permite crear páginas dinámicas que respondan a la URL actual.

5. **Integración con el ecosistema de React:** React Router se integra fácilmente con otras bibliotecas y herramientas de React, como Redux para la gestión del estado y componentes funcionales o de clase para la representación de las vistas.

Para comenzar a utilizar React Router en una aplicación de React, primero debes instalar la biblioteca utilizando npm o yarn:

```bash
npm install react-router-dom

# O usando yarn

yarn add react-router-dom
```

Una vez instalado, puedes comenzar a definir las rutas de tu aplicación utilizando los componentes proporcionados por React Router, como **BrowserRouter**, **Route**, y **Link**.

Aquí hay un ejemplo básico de cómo utilizar React Router en una aplicación de React:

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <h1>Inicio</h1>;
const About = () => <h1>Acerca de</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;
```

En este ejemplo, hemos definido dos componentes (**Home** y **About**) y hemos configurado rutas para ellos utilizando **Route**. También hemos creado enlaces (**Link**) en una barra de navegación (**nav**) para permitir la navegación entre las diferentes páginas de la aplicación.

## Configuración básica de rutas.

La configuración básica de rutas en React Router generalmente implica lo siguiente:

1. **Instalación de React Router:** Primero, debes instalar React Router en tu proyecto utilizando npm o yarn, como se mencionó anteriormente:

```bash
npm install react-router-dom

# O usando yarn

yarn add react-router-dom
```
1. **Definición de rutas en la aplicación:** Luego, defines las rutas de tu aplicación utilizando los componentes proporcionados por React Router, como **BrowserRouter**, **Route**, y **Switch**.

2. **Creación de componentes para cada ruta:** Crea componentes de React para cada ruta que desees representar en tu aplicación.

3. **Navegación entre rutas:** Agrega enlaces (**Link**) o botones para permitir que los usuarios naveguen entre las diferentes rutas de tu aplicación.

Aquí tienes un ejemplo básico que muestra cómo configurar rutas en una aplicación de React utilizando React Router:

```jsx
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// Componentes para las rutas
const Home = () => <h1>Inicio</h1>;
const About = () => <h1>Acerca de</h1>;
const Contact = () => <h1>Contacto</h1>;
const NotFound = () => <h1>Página no encontrada</h1>;

// Componente principal de la aplicación
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/_ Barra de navegación _/}
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Definición de rutas */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
```

En este ejemplo:

- Utilizamos **BrowserRouter** para envolver nuestra aplicación y habilitar el enrutamiento.
- Definimos rutas utilizando el componente **Route**, que toma la URL y el componente a renderizar cuando se corresponde con esa URL.
- Usamos **Link** para crear enlaces en nuestra barra de navegación para permitir la navegación entre las diferentes rutas.
- Utilizamos **Switch** para asegurarnos de que solo se renderice una ruta a la vez. Esto evita que múltiples rutas coincidan y se rendericen al mismo tiempo.
- Finalmente, proporcionamos una ruta de **NotFound** para manejar cualquier URL que no coincida con ninguna de las rutas definidas.

# Uso de parámetros y redirecciones.

Para utilizar parámetros en las rutas y realizar redirecciones en React Router, puedes aprovechar las características proporcionadas por la biblioteca. A continuación, te mostraré cómo puedes hacerlo:

## Uso de Parámetros en las Rutas:
Puedes definir parámetros en las rutas utilizando el **Route** componente de React Router y acceder a esos parámetros dentro de tu componente utilizando **props.match.params.**

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const UserProfile = ({ match }) => {
  const { username } = match.params;
  return <h1>Perfil de {username}</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile/john">Perfil de John</Link>
            </li>
            <li>
              <Link to="/profile/jane">Perfil de Jane</Link>
            </li>
          </ul>
        </nav>

        <Route path="/profile/:username" component={UserProfile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
```

En este ejemplo, definimos una ruta **/profile/:username** donde **:username** es un parámetro dinámico que puede cambiar. Cuando navegamos a **/profile/john**, **props.match.params.username** será **"john"**, y cuando navegamos a **/profile/jane**, **props.match.params.username** será **"jane"**.

Redirecciones:
Para realizar redirecciones en React Router, puedes usar el componente **Redirect** o el método **history.push().**

```jsx
import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

const Home = () => <h1>Inicio</h1>;
const About = () => <h1>Acerca de</h1>;
const Contact = () => <h1>Contacto</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/redirect">Redireccionar</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        {/* Redirección */}
        <Route path="/redirect" render={() => <Redirect to="/" />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
```

En este ejemplo, hemos definido una ruta **/redirect** que redirige al inicio cuando se accede a ella utilizando el componente **Redirect**.

También puedes realizar redirecciones utilizando **history.push()** de esta manera:

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = ({ history }) => {
  const handleClick = () => {
    history.push("/about");
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>

        <button onClick={handleClick}>Ir a Acerca de</button>

        <Route path="/" exact render={() => <h1>Inicio</h1>} />
        <Route path="/about" render={() => <h1>Acerca de</h1>} />
      </div>
    </BrowserRouter>
  );
};

export default App;
```
En este ejemplo, el botón "Ir a Acerca de" redirige a la ruta **/about** utilizando **history.push()**. Esto es útil cuando necesitas realizar redirecciones programáticamente, como en respuesta a una acción del usuario o un evento.

# Alternativa NextJS

Next.js es un popular framework de React que se utiliza para construir aplicaciones web modernas, especialmente aplicaciones de una sola página (SPA) y aplicaciones web estáticas o generadas por el servidor (SSR). Proporciona una amplia gama de características y beneficios, incluyendo:

1. Renderizado del lado del servidor (SSR): Next.js permite renderizar páginas en el servidor antes de enviarlas al navegador, lo que mejora el rendimiento y la optimización para los motores de búsqueda, así como la experiencia del usuario al mostrar contenido rápidamente.

2. Generación de sitios estáticos (SSG): Además del SSR, Next.js ofrece la generación de sitios estáticos, lo que significa que puedes generar y pre-renderizar páginas estáticas durante la compilación, lo que resulta en un mejor tiempo de carga y una mayor escalabilidad.

3. Enrutamiento dinámico: Next.js proporciona un enrutamiento dinámico fácil de usar, lo que te permite definir rutas de manera dinámica y cargar componentes de forma asíncrona según las necesidades de la aplicación.

4. Pre-procesamiento de CSS: Next.js admite varias formas de manejar estilos CSS, incluyendo CSS Modules, Styled Components y otros pre-procesadores de CSS como Sass o Less.

5. API de enrutamiento integrada: La API de enrutamiento integrada en Next.js facilita la creación de API RESTful o GraphQL dentro de la misma aplicación, lo que simplifica el desarrollo de aplicaciones web completas.

6. Compatibilidad con TypeScript: Next.js tiene una excelente compatibilidad con TypeScript, lo que te permite escribir tu aplicación con TypeScript de forma nativa y aprovechar todas las ventajas del sistema de tipos estáticos de TypeScript.

7. Optimización de imágenes: Next.js proporciona funcionalidades de optimización de imágenes que te permiten cargar y mostrar imágenes de manera eficiente, lo que mejora el rendimiento y la experiencia del usuario.

8. Soporte para múltiples entornos de implementación: Next.js es compatible con varios entornos de implementación, incluyendo Vercel, AWS, Netlify y otros, lo que te permite implementar tu aplicación en el entorno que mejor se adapte a tus necesidades.

En resumen, Next.js es una excelente alternativa a React puro cuando necesitas una solución más completa y potente para construir aplicaciones web modernas con React, especialmente si requieres renderizado del lado del servidor, generación de sitios estáticos y un enrutamiento dinámico.
