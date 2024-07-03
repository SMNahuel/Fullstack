# 6. Fetching

# Introducción a Fetch API

## ¿Qué es Fetch API?

Fetch API es una interfaz moderna de JavaScript que proporciona una forma fácil y poderosa de hacer solicitudes de red, como obtener recursos desde una URL remota o enviar datos a un servidor. Reemplaza a la antigua API XMLHttpRequest y ofrece una sintaxis más limpia y basada en promesas. Fetch API permite realizar solicitudes HTTP asíncronas y manejar las respuestas de manera eficiente. Es ampliamente utilizada en el desarrollo web moderno para interactuar con servidores y consumir servicios web.

## Diferencias entre Fetch y XMLHttpRequest.

Fetch API y XMLHttpRequest (XHR) son dos formas de hacer solicitudes de red en JavaScript, pero tienen diferencias significativas:

1. Sintaxis y Promesas:

- Fetch API utiliza una sintaxis basada en promesas, lo que facilita el manejo de solicitudes asíncronas y la escritura de código más limpio.
- XMLHttpRequest, en cambio, utiliza una sintaxis basada en eventos, donde se deben definir callbacks para manejar eventos como la carga exitosa, el progreso, etc.

2. Soporte nativo para JSON:

- Fetch API incluye soporte nativo para JSON, lo que significa que puedes enviar y recibir datos JSON sin tener que realizar una conversión manual.
- Con XMLHttpRequest, necesitas convertir manualmente los datos entre JSON y texto usando JSON.parse() y JSON.stringify().

3. Cross-Origin Resource Sharing (CORS):

- Fetch API sigue las reglas de CORS de manera más estricta que XMLHttpRequest. Por defecto, Fetch API no envía cookies ni credenciales de autenticación a menos que la respuesta incluya los encabezados adecuados que lo permitan.
- XMLHttpRequest, por otro lado, tiene un comportamiento más laxo en cuanto a CORS y puede enviar automáticamente cookies y credenciales en ciertos casos, lo que puede ser menos seguro.

4. Soporte para Streams:

- Fetch API admite el uso de streams para leer y escribir datos, lo que permite manejar grandes volúmenes de datos de manera eficiente.
- XMLHttpRequest no ofrece soporte nativo para streams.

5. Compatibilidad con navegadores antiguos:

- Fetch API es más moderna y no es compatible con navegadores más antiguos, como Internet Explorer 11. Sin embargo, se puede usar un polyfill para agregar compatibilidad con versiones anteriores.
- XMLHttpRequest es compatible con navegadores más antiguos, pero su sintaxis y manejo de eventos pueden ser menos intuitivos.

En resumen, Fetch API es más moderna, ofrece una sintaxis basada en promesas más fácil de usar y tiene un mejor soporte para JSON y CORS. Sin embargo, si necesitas compatibilidad con navegadores más antiguos o el manejo directo de eventos, XMLHttpRequest todavía puede ser útil.

## Ventajas de utilizar Fetch API en aplicaciones React.

Utilizar Fetch API en aplicaciones React ofrece varias ventajas:

1. Sintaxis Moderna y Basada en Promesas: Fetch API utiliza una sintaxis moderna basada en promesas, lo que hace que el código sea más limpio y fácil de entender, especialmente cuando se trata de realizar solicitudes asíncronas para obtener datos de un servidor.

2. Integración Natural con React: Al ser una API estándar de JavaScript, Fetch se integra naturalmente con React. Puedes usarlo dentro de componentes de React para realizar solicitudes de datos cuando sea necesario, sin necesidad de instalar bibliotecas adicionales.

3. Facilidad para Manejar Respuestas: Fetch API proporciona métodos simples para manejar las respuestas de las solicitudes, como json() para analizar respuestas JSON y text() para obtener el cuerpo de la respuesta como texto. Esto facilita el procesamiento de los datos recibidos del servidor.

4. Flexibilidad en las Solicitudes: Fetch API ofrece una gran flexibilidad en la configuración de las solicitudes, permitiendo especificar encabezados personalizados, métodos HTTP, y otras opciones según las necesidades de tu aplicación.

5. Soporte para CORS: Fetch API sigue las reglas de Cross-Origin Resource Sharing (CORS) de manera más estricta que otras APIs de solicitud, lo que puede ser beneficioso para aplicaciones que interactúan con servidores remotos y necesitan manejar la política de mismo origen.

6. Compatibilidad con Streams: Fetch API es compatible con streams, lo que puede ser útil para manejar grandes volúmenes de datos de manera eficiente, especialmente en aplicaciones que trabajan con archivos multimedia u otros datos pesados.

En resumen, Fetch API ofrece una forma moderna y poderosa de realizar solicitudes de red en aplicaciones React, facilitando la integración, el manejo de respuestas y proporcionando flexibilidad en las solicitudes HTTP.

# Realización de Solicitudes GET

## Uso básico de Fetch para realizar solicitudes GET a un servidor.

```JSX
fetch('https://api.example.com/data')
  .then(response => {
    // Verificar si la solicitud fue exitosa (código de estado 200-299)
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then(data => {
    // Manejar los datos recibidos
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    // Capturar y manejar errores de la solicitud
    console.error('Ocurrió un error al realizar la solicitud:', error);
  });
```

En este ejemplo:

1. fetch('https://api.example.com/data') realiza una solicitud GET a la URL proporcionada.
2. La primera función then() maneja la respuesta de la solicitud. Verifica si la respuesta es exitosa (código de estado en el rango 200-299) y luego convierte la respuesta a formato JSON utilizando response.json().
3. La segunda función then() maneja los datos obtenidos de la respuesta y los imprime en la consola.
4. La función catch() captura cualquier error que pueda ocurrir durante la solicitud, como un error de red o un error en el servidor, y lo imprime en la consola.

Este es un ejemplo básico, pero puedes expandirlo para incluir más lógica según las necesidades de tu aplicación, como agregar encabezados personalizados, manejar diferentes códigos de estado, o realizar múltiples solicitudes en secuencia o en paralelo.

## Manejo de promesas y respuestas en Fetch.

```javascript
// Realizar una solicitud GET a la URL especificada
fetch("https://api.example.com/data")
  // Manejar la respuesta de la solicitud
  .then((response) => {
    // Verificar si la respuesta es exitosa (código de estado en el rango 200-299)
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzar un error con el mensaje correspondiente
      throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    // Si la respuesta es exitosa, parsear la respuesta como JSON y retornarla
    return response.json();
  })
  // Manejar los datos obtenidos de la respuesta exitosa
  .then((data) => {
    // Hacer algo con los datos recibidos, por ejemplo, mostrarlos en la consola
    console.log("Datos recibidos:", data);
  })
  // Capturar y manejar cualquier error que ocurra durante la solicitud
  .catch((error) => {
    // Imprimir el mensaje de error en la consola
    console.error("Ocurrió un error al realizar la solicitud:", error);
  });
```

En este ejemplo:

1. fetch('https://api.example.com/data') realiza una solicitud GET a la URL especificada.
2. La primera función then() maneja la respuesta de la solicitud. Verifica si la respuesta es exitosa (código de estado en el rango 200-299). Si no lo es, lanza un error con el mensaje correspondiente. Si la respuesta es exitosa, parsea la respuesta como JSON y la devuelve.
3. La segunda función then() maneja los datos obtenidos de la respuesta exitosa. Aquí es donde puedes trabajar con los datos recibidos, como mostrarlos en la consola, procesarlos más, o usarlos para actualizar el estado de tu aplicación.
4. La función catch() captura cualquier error que pueda ocurrir durante la solicitud, ya sea un error de red, un error en el servidor, o un error en el procesamiento de los datos. Se encarga de imprimir el mensaje de error en la consola para que puedas diagnosticar y manejar el problema adecuadamente.

Este es un ejemplo básico del manejo de promesas y respuestas en Fetch. Puedes personalizarlo según las necesidades específicas de tu aplicación, agregando lógica adicional para manejar diferentes casos de uso o escenarios

## Ejemplos prácticos de solicitudes GET en una aplicación React.

aquí tienes algunos ejemplos prácticos de cómo realizar solicitudes GET en una aplicación React utilizando Fetch:

Obtener datos y mostrarlos en un componente:

```javascript
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET al montar el componente
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []); // El segundo argumento [] indica que useEffect solo se ejecuta una vez (equivalente a componentDidMount)

  return (
    <div>
      <h1>Datos obtenidos:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

En este ejemplo, el componente App realiza una solicitud GET a la URL proporcionada en la API cuando se monta por primera vez (equivalente a componentDidMount en las clases). Una vez que se obtienen los datos, se almacenan en el estado data utilizando el hook useState, y luego se muestran en el componente.

Obtener datos en respuesta a un evento (por ejemplo, al hacer clic en un botón):

```javascript
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    // Realizar la solicitud GET al hacer clic en el botón
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  };

  return (
    <div>
      <button onClick={fetchData}>Obtener datos</button>
      {data && (
        <div>
          <h2>Datos obtenidos:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
```

En este ejemplo, el componente App tiene un botón que al hacer clic llama a la función fetchData, la cual realiza una solicitud GET a la URL proporcionada en la API. Una vez que se obtienen los datos, se almacenan en el estado data y se muestran en el componente.

Estos son solo ejemplos básicos de cómo realizar solicitudes GET en una aplicación React utilizando Fetch. Puedes adaptar estos ejemplos según las necesidades específicas de tu aplicación, como manejar encabezados personalizados, enviar parámetros de consulta, o agregar lógica adicional para procesar los datos recibidos.

# Envío de Datos con Fetch

## Realización de solicitudes POST con Fetch para enviar datos al servidor.

Aquí tienes un ejemplo de cómo realizar una solicitud POST con Fetch para enviar datos al servidor en una aplicación React:

```javascript
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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

    // Realizar la solicitud POST al servidor
    fetch("https://api.example.com/post-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        // Actualizar el estado con el mensaje de respuesta del servidor
        setResponseMessage(data.message);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  return (
    <div>
      <h1>Enviar Datos al Servidor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <p>Respuesta del servidor: {responseMessage}</p>}
    </div>
  );
}

export default App;
```

En este ejemplo:

1. formData es un estado que contiene los datos del formulario (username y email).
2. handleChange es una función que actualiza el estado formData cuando cambian los campos del formulario.
3. handleSubmit es una función que se ejecuta cuando se envía el formulario. Realiza una solicitud POST al servidor con los datos del formulario en formato JSON.
4. La solicitud POST incluye el encabezado Content-Type: application/json y el cuerpo de la solicitud es el objeto formData convertido a JSON mediante JSON.stringify(formData).
5. Se manejan las respuestas del servidor, mostrando un mensaje de respuesta en el componente una vez que se recibe la respuesta del servidor.

Este ejemplo puede adaptarse según las necesidades específicas de tu aplicación, como agregar validación de datos del formulario, manejar diferentes casos de respuesta del servidor, o agregar lógica adicional después de enviar los datos al servidor.

## Uso de opciones de configuración en Fetch para personalizar las solicitudes.

Fetch API proporciona una variedad de opciones de configuración que puedes utilizar para personalizar las solicitudes que realizas. Aquí tienes algunos ejemplos de cómo puedes usar estas opciones:

Método HTTP y Cuerpo de la Solicitud:

```javascript
fetch("https://api.example.com/data", {
  method: "POST", // Cambiar el método HTTP (GET, POST, PUT, DELETE, etc.)
  headers: {
    "Content-Type": "application/json", // Establecer encabezados personalizados
  },
  body: JSON.stringify({ key: "value" }), // Enviar datos en el cuerpo de la solicitud
});
```

Encabezados Personalizados:

```javascript
const customHeaders = new Headers();
customHeaders.append("Authorization", "Bearer token123");

fetch("https://api.example.com/data", {
  headers: customHeaders,
});
```

Modo de Caché:

```javascript
fetch("https://api.example.com/data", {
  cache: "no-store", // Evitar la caché de la respuesta (puede ser 'default', 'no-store', 'reload', etc.)
});
```

Credenciales y Política de Origen Cruzado (CORS):

```javascript
fetch("https://api.example.com/data", {
  credentials: "include", // Enviar cookies y credenciales de autenticación
  mode: "cors", // Habilitar CORS (puede ser 'cors', 'same-origin', 'no-cors', etc.)
});
```

Redirecciones y Tiempo de Espera:

```javascript
fetch("https://api.example.com/data", {
  redirect: "follow", // Seguir las redirecciones automáticas ('follow', 'error', 'manual')
  timeout: 5000, // Establecer un tiempo de espera para la solicitud (en milisegundos)
});
```

Tipo de Datos Esperados:

```javascript
fetch("https://api.example.com/data", {
  // Indicar el tipo de datos esperados en la respuesta ('json', 'text', 'blob', etc.)
  // Esto afecta cómo se procesa la respuesta en la función `then()`
  dataType: "json",
});
```

Estos son solo algunos ejemplos de cómo puedes utilizar opciones de configuración en Fetch para personalizar las solicitudes según tus necesidades específicas. Puedes combinar estas opciones según sea necesario para lograr el comportamiento deseado en tus solicitudes.

## Ejemplos prácticos de envío de datos en una aplicación React.

Formulario Controlado:

```javascript
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    // Actualizar el estado formData cuando cambian los campos del formulario
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar la solicitud POST al servidor
    fetch("https://api.example.com/form-data-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  return (
    <div>
      <h1>Enviar Datos al Servidor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
```

Este ejemplo muestra un formulario controlado en el que los datos del formulario son almacenados en el estado formData y se actualizan cada vez que cambia algún campo del formulario. Cuando el formulario se envía, se realiza una solicitud POST al servidor con los datos del formulario en formato JSON.

Enviar Datos sin Formulario:

```javascript
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = () => {
    // Realizar la solicitud POST al servidor
    fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  return (
    <div>
      <h1>Enviar Datos al Servidor</h1>
      <label>
        Username:
        <input
          type="text"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default App;
```

En este ejemplo, los datos del formulario se actualizan en el estado formData utilizando useState. Cuando se hace clic en el botón "Enviar", se realiza una solicitud POST al servidor con los datos del formulario en formato JSON.

Estos son ejemplos básicos de cómo enviar datos en una aplicación React utilizando Fetch. Puedes personalizar estos ejemplos según las necesidades específicas de tu aplicación, como agregar validación de datos, manejar diferentes casos de respuesta del servidor, o agregar lógica adicional después de enviar los datos al servidor.

# Manejo de Respuestas

## Manejo de diferentes tipos de respuestas: JSON, texto, blobs, etc.

Para manejar diferentes tipos de respuestas en Fetch, puedes utilizar los métodos proporcionados por el objeto Response. Aquí te muestro cómo manejar los tipos de respuesta más comunes: JSON, texto y blobs.

Respuesta JSON:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then((data) => {
    // Trabajar con los datos JSON
    console.log("Datos JSON recibidos:", data);
  })
  .catch((error) => {
    console.error("Error al obtener datos:", error);
  });
```

Respuesta Texto:

```javascript
fetch("https://api.example.com/text")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    return response.text(); // Obtener el cuerpo de la respuesta como texto
  })
  .then((text) => {
    // Trabajar con el texto recibido
    console.log("Texto recibido:", text);
  })
  .catch((error) => {
    console.error("Error al obtener texto:", error);
  });
```

Respuesta Blob (datos binarios):

```javascript
fetch("https://api.example.com/image")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    return response.blob(); // Obtener el cuerpo de la respuesta como un objeto Blob
  })
  .then((blob) => {
    // Trabajar con el Blob recibido (por ejemplo, mostrar una imagen)
    const imageUrl = URL.createObjectURL(blob);
    console.log("URL de la imagen:", imageUrl);
    // Luego, puedes usar esta URL en un elemento <img> en tu aplicación
  })
  .catch((error) => {
    console.error("Error al obtener imagen:", error);
  });
```

Estos ejemplos ilustran cómo manejar diferentes tipos de respuestas en Fetch. Puedes adaptarlos según tus necesidades específicas y cómo deseas procesar los datos recibidos del servidor en tu aplicación React.

## Validación y manejo de errores en las respuestas de Fetch.

Manejar y validar errores en las respuestas de Fetch es crucial para garantizar un comportamiento robusto y una experiencia de usuario fluida en tu aplicación. Aquí te muestro cómo puedes validar y manejar los errores en Fetch:

Manejo de Errores de Red y de Solicitud:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      // Si la respuesta no es exitosa (código de estado diferente de 200-299)
      // puedes lanzar un error para ser capturado por el bloque catch
      throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    // Si la respuesta es exitosa, puedes continuar procesando la respuesta
    return response.json();
  })
  .then((data) => {
    console.log("Datos recibidos:", data);
  })
  .catch((error) => {
    // Captura y maneja cualquier error que ocurra durante la solicitud o procesamiento de la respuesta
    console.error("Error en la solicitud:", error);
  });
```

Manejo de Errores de JSON no Válido:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    // Intenta parsear la respuesta como JSON
    return response.json();
  })
  .then((data) => {
    // Si la respuesta no es un JSON válido, puedes lanzar un error
    if (!data) {
      throw new Error("La respuesta no es un JSON válido");
    }
    console.log("Datos recibidos:", data);
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
  });
```

Manejo de Errores de Conexión y Tiempo de Espera:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    // Verifica si hubo un error de conexión o tiempo de espera
    if (!response.ok) {
      throw new Error("Hubo un problema de conexión o tiempo de espera");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Datos recibidos:", data);
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
  });
```

Manejo de Errores en el Servidor:

```javascript
    axios
      .post("http://localhost:3001/register", formData)
      .then((response) => {
        console.log(response.status);
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
```

Estos son ejemplos de cómo puedes validar y manejar diferentes tipos de errores en las respuestas de Fetch. Es importante identificar los posibles puntos de falla y manejarlos de manera adecuada para brindar una experiencia de usuario robusta en tu aplicación React.

## Transformación de datos de respuesta para adaptarlos al estado de la aplicación.

Para adaptar los datos de la respuesta de Fetch al estado de la aplicación en React, puedes realizar cualquier transformación necesaria en los datos antes de almacenarlos en el estado. Aquí hay algunos ejemplos de cómo puedes hacerlo:

## Transformación de Datos JSON:
Supongamos que recibes un objeto JSON de la API y necesitas almacenar solo ciertos campos en el estado de tu aplicación:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Realizar la transformación de datos según sea necesario
    const transformedData = {
      id: data.id,
      name: data.name,
      age: data.age,
    };
    // Almacenar los datos transformados en el estado de la aplicación
    setState(transformedData);
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
  });
```

## Filtrado o Mapeo de una Matriz de Datos:
Si la API devuelve una matriz de objetos y solo necesitas ciertos elementos o quieres realizar alguna operación en ellos antes de almacenarlos en el estado:

```javascript
fetch("https://api.example.com/items")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Filtrar o mapear la matriz de datos según sea necesario
    const filteredItems = data.filter((item) => item.price > 100);
    // Almacenar los datos transformados en el estado de la aplicación
    setState(filteredItems);
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
  });
```

## Combinación de Datos de Múltiples Fuentes:
Si necesitas combinar los datos de múltiples fuentes antes de almacenarlos en el estado:

```javascript
Promise.all([
  fetch("https://api.example.com/users"),
  fetch("https://api.example.com/posts"),
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
```

Estos son ejemplos básicos de cómo puedes transformar los datos de la respuesta de Fetch para adaptarlos al estado de tu aplicación en React. Puedes realizar cualquier operación necesaria en los datos antes de almacenarlos en el estado, dependiendo de los requisitos específicos de tu aplicación.

# Integración con el Estado de la Aplicación

## Actualización del estado de la aplicación con datos obtenidos mediante Fetch.
Cuando obtienes datos de una solicitud Fetch y deseas actualizar el estado de tu aplicación en React con esos datos, normalmente lo haces dentro del callback de la promesa .then(). Aquí te muestro un ejemplo de cómo puedes hacerlo:

Supongamos que tienes un componente de clase en React y quieres actualizar el estado con los datos obtenidos de una solicitud Fetch:

```javascript

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        // Actualizar el estado con los datos recibidos
        this.setState({
          data: data,
          loading: false,
          error: null
        });
      })
      .catch(error => {
        // Manejar errores de la solicitud
        this.setState({
          loading: false,
          error: error.message
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Cargando...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        {/* Renderizar los datos recibidos en el estado */}
        <h1>Datos recibidos:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
```
En este ejemplo:

- En el método componentDidMount(), realizamos una solicitud Fetch para obtener datos de la API.
- Cuando la promesa se resuelve exitosamente en el primer .then(), actualizamos el estado de la aplicación con los datos recibidos utilizando this.setState().
- Si la solicitud Fetch falla o hay algún error, capturamos el error en el bloque catch() y actualizamos el estado con el mensaje de error correspondiente.
- En el método render(), comprobamos el estado de loading y error para mostrar un indicador de carga, un mensaje de error, o los datos recibidos según corresponda.
- Este es un enfoque común para actualizar el estado de tu aplicación con datos obtenidos mediante Fetch en React. Puedes personalizar este código según las necesidades específicas de tu aplicación, como manejar diferentes casos de respuesta del servidor o realizar más operaciones con los datos recibidos antes de mostrarlos en tu aplicación.

## Uso de useState y useEffect para gestionar el ciclo de vida de los componentes y las solicitudes de datos.

puedes usar los hooks useState y useEffect en componentes de función para gestionar el ciclo de vida y las solicitudes de datos en React. Aquí tienes un ejemplo de cómo hacerlo:

```javascript

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Esta función se ejecuta después de que el componente se monta en el DOM
    // Aquí es donde realizamos la solicitud de datos

    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        // Actualizar el estado con los datos recibidos
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        // Manejar errores de la solicitud
        setLoading(false);
        setError(error.message);
      });

    // La función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      // Aquí puedes realizar limpieza si es necesario
    };
  }, []); // El segundo argumento [] indica que useEffect se ejecuta solo una vez, equivalente a componentDidMount

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Renderizar los datos recibidos */}
      <h1>Datos recibidos:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
```
En este ejemplo:

- Usamos el hook useState para inicializar el estado de data, loading y error.
- Usamos el hook useEffect para realizar la solicitud de datos cuando el componente se monta en el DOM.
- Dentro de useEffect, realizamos la solicitud de datos con fetch y actualizamos el estado en consecuencia.
- También manejamos cualquier error que ocurra durante la solicitud y actualizamos el estado de loading y error.
- Si loading es verdadero, mostramos un mensaje de carga. Si hay un error, mostramos un mensaje de error. Si no hay error ni carga, mostramos los datos recibidos.

Este es un patrón común en React para manejar el ciclo de vida de los componentes y las solicitudes de datos en componentes de función utilizando hooks.
## Ejemplos prácticos de integración de Fetch con el estado de la aplicación en React.
Obtener y mostrar datos en una lista:
```javascript

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET al montar el componente
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        // Actualizar el estado con los datos recibidos
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        // Manejar errores de la solicitud
        setLoading(false);
        setError(error.message);
      });
  }, []); // El segundo argumento [] indica que useEffect se ejecuta solo una vez (equivalente a componentDidMount)

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Datos</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
Enviar datos a través de un formulario:
```javascript

import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = event => {
    event.preventDefault();

    // Realizar la solicitud POST al servidor
    fetch('https://api.example.com/form-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        alert('Datos enviados con éxito');
      })
      .catch(error => {
        // Manejar errores de la solicitud
        console.error('Error al enviar datos:', error);
      });
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
```
Estos son ejemplos prácticos de cómo integrar Fetch con el estado de la aplicación en React utilizando hooks. Puedes adaptar estos ejemplos según las necesidades específicas de tu aplicación, como manejar diferentes casos de respuesta del servidor, realizar más operaciones con los datos recibidos, o agregar lógica adicional después de enviar los datos al servidor.