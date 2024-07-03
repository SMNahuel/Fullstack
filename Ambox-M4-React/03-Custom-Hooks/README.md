# 3. Custom Hooks
# Introducción a los Custom Hooks

## ¿Qué son los Custom Hooks?

Los Custom Hooks, o "Hooks personalizados" en español, son una característica de React, una biblioteca de JavaScript para construir interfaces de usuario. Los Hooks son funciones que permiten a los desarrolladores usar el estado y otras características de React en componentes de función, que anteriormente solo estaban disponibles en componentes de clase.

Los Custom Hooks son simplemente Hooks que han sido creados por el usuario para encapsular lógica compleja y reutilizable en componentes de función de React. Esto permite separar la lógica del componente de su representación visual, lo que hace que el código sea más legible, mantenible y reutilizable.

Los Custom Hooks se definen como funciones normales de JavaScript que empiezan con la palabra "use" (por ejemplo, useFetch, useLocalStorage, etc.). Pueden aceptar argumentos y devolver valores, incluidos otros Hooks. Estos Hooks personalizados pueden abstraer tareas comunes como el manejo de solicitudes HTTP, la gestión del estado, la suscripción a eventos y mucho más.

En resumen, los Custom Hooks son una herramienta poderosa para abstraer la lógica de los componentes de React y fomentar la reutilización del código en la construcción de aplicaciones web.


## Ventajas de utilizar Custom Hooks.

Utilizar Custom Hooks en React ofrece varias ventajas:

- **Reutilización de lógica:** 

Los Custom Hooks permiten encapsular la lógica compleja en funciones reutilizables. Esto promueve un código más limpio y modular, ya que la lógica puede ser compartida entre diferentes componentes sin necesidad de duplicar código.

- **Abstracción de la complejidad:**

Los Custom Hooks pueden abstraer la complejidad de ciertas tareas, como la gestión del estado, el manejo de efectos secundarios, las solicitudes HTTP, etc. Esto facilita la escritura de componentes más simples y centrados en la presentación.

- **Separación de preocupaciones:**

Al separar la lógica de los componentes visuales, los Custom Hooks fomentan una mejor separación de preocupaciones en la aplicación. Esto hace que el código sea más fácil de entender, mantener y probar.

- **Facilita la legibilidad:**

Utilizar Custom Hooks puede hacer que el código sea más legible y fácil de entender, ya que permite a los desarrolladores nombrar la lógica encapsulada de manera descriptiva y clara.

- **Integración con el ecosistema de React:**

Los Custom Hooks se integran perfectamente con otras características de React, como el contexto, el enrutamiento y los componentes de alto nivel. Esto hace que sea fácil combinar diferentes partes de la lógica de la aplicación de manera coherente.

- **Promueve mejores prácticas de desarrollo:** 

Utilizar Custom Hooks fomenta el uso de mejores prácticas de desarrollo, como la reutilización de código, la modularidad y la separación de preocupaciones, lo que puede mejorar la calidad y la mantenibilidad del código.

En resumen, las ventajas de utilizar Custom Hooks en React incluyen la reutilización de lógica, la abstracción de la complejidad, la separación de preocupaciones, la legibilidad del código y la integración con el ecosistema de React, todo lo cual puede conducir a un desarrollo más eficiente y de mayor calidad.

## **Ejemplos de situaciones en las que los Custom Hooks son útiles.**

Manejo de la geolocalización: Si tu aplicación necesita acceder a la ubicación del usuario, puedes crear un Custom Hook para manejar la obtención de la geolocalización y actualizarla de manera reactiva en tu componente.

- **Control de accesibilidad:** Para mejorar la accesibilidad de tu aplicación, puedes crear un Custom Hook que se encargue de administrar el enfoque, el tamaño de la fuente, los colores de alto contraste y otras características de accesibilidad.

- **Integración con bibliotecas externas:** Si estás utilizando bibliotecas externas en tu aplicación, como D3.js para visualizaciones de datos o Three.js para gráficos 3D, puedes crear Custom Hooks para encapsular la integración y la lógica específica de esas bibliotecas.

- **Manejo de eventos del teclado:** Para capturar y manejar eventos del teclado de manera global en tu aplicación, como atajos de teclado o navegación por teclado, puedes crear un Custom Hook que se encargue de registrar los eventos del teclado y ejecutar las acciones correspondientes.

- **Animaciones personalizadas:** Si necesitas crear animaciones personalizadas en tu aplicación, puedes crear un Custom Hook que se encargue de gestionar el estado de la animación, los tiempos y las transiciones para que puedas reutilizar fácilmente esas animaciones en diferentes componentes.

- **Gestión del estado de la aplicación:** Para manejar el estado global de tu aplicación, puedes crear un Custom Hook que utilice el contexto de React o alguna solución de gestión del estado (como Redux) para centralizar y reutilizar la lógica de estado en toda tu aplicación.

Estos son solo algunos ejemplos adicionales de situaciones en las que los Custom Hooks pueden ser útiles en React. La versatilidad de los Custom Hooks permite abordar una amplia gama de problemas y facilita la creación de componentes más simples, modulares y reutilizables en tus aplicaciones.


# Creación de Custom Hooks

## Estructura de un Custom Hook.
La estructura de un Custom Hook en React es bastante simple. Aquí hay un ejemplo básico de cómo podría verse la estructura de un Custom Hook:

```javascript

import { useState, useEffect } from 'react';

// Definir el Custom Hook
function UseCustomHook(initialValue) {
  // Declarar el estado y otros valores necesarios
  const [state, setState] = useState(initialValue);
  
  // Definir efectos secundarios usando useEffect u otros Hooks
  useEffect(() => {
    // Lógica de efectos secundarios
    // Por ejemplo, suscripción a eventos, llamadas a API, etc.
    
    // Retorno de la función de limpieza (cleanup function) opcional
    return () => {
      // Lógica de limpieza (cleanup)
    };
  }, [/* Dependencias */]);

  // Definir otras funciones y lógica necesaria
  function updateState(newState) {
    setState(newState);
  }

  // Retornar los valores y funciones necesarios
  return {
    state,
    updateState,
    // Otras funciones y valores necesarios
  };
}

export default UseCustomHook;
```
En este ejemplo:

- El Custom Hook se llama UseCustomHook. Este nombre debe comenzar con "use" para que React lo identifique como un Hook.
- Se importan los Hooks necesarios de React, como useState y useEffect.
- Dentro del Hook, se declara el estado y se inicializa utilizando useState.
- Se define cualquier lógica de efectos secundarios necesaria dentro de useEffect.
- Se pueden definir otras funciones y lógica según sea necesario para el Custom Hook.
- Finalmente, se retorna un objeto que contiene los valores y funciones necesarios para que los componentes que utilicen este Hook puedan interactuar con él.

Para usar este Custom Hook en un componente de React, simplemente lo importas y lo llamas dentro del componente, de la misma manera que usarías cualquier otro Hook proporcionado por React:

```javascript

import React from 'react';
import UseCustomHook from './UseCustomHook';

function MyComponent() {
  // Usar el Custom Hook
  const { state, updateState } = UseCustomHook(initialValue);

  // Resto del componente...
}
```
Con esta estructura básica, puedes crear Custom Hooks para abstraer cualquier lógica compleja o reutilizable en tu aplicación de React.

## Pautas de nomenclatura para los Custom Hooks.


A la hora de nombrar Custom Hooks en React, es importante seguir algunas pautas de nomenclatura para mantener la consistencia y facilitar la comprensión del propósito y el uso del Hook. Aquí hay algunas pautas comunes de nomenclatura para los Custom Hooks:

- **Prefijo "use":** Todos los Custom Hooks deben comenzar con el prefijo "use" para que React pueda identificarlos como Hooks válidos. Por ejemplo, useFetch, useLocalStorage, etc.

- **Descripción clara:** El nombre del Custom Hook debe ser descriptivo y reflejar claramente su propósito y funcionalidad. Esto ayuda a que otros desarrolladores comprendan rápidamente qué hace el Hook y cómo puede ser utilizado.

- **CamelCase:** Usa la convención de CamelCase para nombrar tus Custom Hooks. Por ejemplo, useFetchData, useModalControl, etc.

- **Usa verbos si es posible:** Prefiere utilizar verbos en el nombre del Hook para indicar que representa una acción o comportamiento. Por ejemplo, useScroll, useFormValidation, etc.

- **Singular o plural:** Elige si el nombre del Hook debe estar en singular o plural según lo que mejor refleje su funcionalidad. Por ejemplo, useCounter si representa un contador o useTodos si representa una lista de elementos.

- **Consistencia:** Mantén la consistencia en la nomenclatura de tus Custom Hooks en toda tu aplicación para que sea más fácil para otros desarrolladores entender y utilizar tu código.

Siguiendo estas pautas de nomenclatura, puedes crear nombres significativos y coherentes para tus Custom Hooks, lo que facilita su uso y comprensión por parte de ti mismo y de otros desarrolladores que trabajen en el proyecto.

# Ejemplos prácticos de creación de Custom Hooks simples.


##  Custom Hook para manejar el estado de un contador:
```javascript

import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;
```
## Custom Hook para manejar el estado de un formulario:
```javascript

import { useState } from 'react';

function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    resetForm
  };
}

export default useForm;
```
## Custom Hook para manejar la autenticación de usuario:
```javascript

import { useState } from 'react';

function useAuthentication() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Lógica para autenticar al usuario
    setUser(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setUser(null);
  };

  return {
    user,
    login,
    logout
  };
}

export default useAuthentication;
```
Estos son solo algunos ejemplos simples de Custom Hooks en React. Cada uno encapsula una pieza de lógica específica (manejo de estado, manejo de formularios, autenticación de usuario) que puede ser reutilizada en diferentes componentes de tu aplicación.

# Optimización y Buenas Práctica

## Mejores prácticas al crear Custom Hooks.
Cuando creas Custom Hooks en React, es importante seguir algunas mejores prácticas para garantizar que tus Hooks sean eficientes, reutilizables y fáciles de mantener. Aquí tienes algunas mejores prácticas al crear Custom Hooks:

- Prefijo "use":

Todos los Custom Hooks deben comenzar con el prefijo "use" para que React pueda identificarlos correctamente como Hooks válidos.

-  Abstracción de la lógica:

Asegúrate de que el Custom Hook encapsule una pieza específica y reutilizable de la lógica. Esto permite que el Hook sea útil en diferentes partes de la aplicación.

- Mantén los Hooks pequeños y específicos:

Evita abarcar demasiadas responsabilidades en un solo Custom Hook. Mantén los Hooks pequeños y específicos para que sean más fáciles de entender y reutilizar.

- Minimiza las dependencias:

Siempre que sea posible, minimiza las dependencias de tu Custom Hook. Esto significa que tu Hook debería depender solo de las propiedades y el estado que realmente necesita para realizar su tarea.

- Documentación clara:

Proporciona una documentación clara y concisa para tu Custom Hook. Describe su propósito, los parámetros que acepta (si los tiene) y los valores que devuelve.

- Provee un ejemplo de uso:

Junto con la documentación, proporciona ejemplos de uso del Custom Hook para que otros desarrolladores puedan entender cómo utilizarlo en su código.

- Sigue las convenciones de nombramiento:

Sigue las convenciones de nombramiento establecidas para los Custom Hooks. Utiliza CamelCase y el prefijo "use" en el nombre del Hook para mantener la coherencia y la compatibilidad con otras bibliotecas y convenciones de React.

- Pruebas unitarias:

Asegúrate de escribir pruebas unitarias para tu Custom Hook para garantizar su correcto funcionamiento y evitar regressions. Puedes utilizar bibliotecas como Jest y React Testing Library para escribir tus pruebas.

- Evita el estado global:

En general, trata de evitar mantener el estado global en tus Custom Hooks, ya que puede hacer que tu aplicación sea más difícil de entender y depurar. Si es necesario, utiliza el contexto de React para compartir el estado entre varios componentes de manera más controlada.

- Revisa la dependencia de efectos:

Al utilizar el Hook useEffect, asegúrate de revisar y gestionar correctamente las dependencias para evitar efectos secundarios inesperados y ciclos de renderizado infinitos.

Siguiendo estas mejores prácticas, puedes crear Custom Hooks eficientes y reutilizables que mejoren la modularidad y la mantenibilidad de tu código en React.

## Consideraciones de rendimiento al utilizar Custom Hooks.

Cuando utilizas Custom Hooks en React, es importante tener en cuenta algunas consideraciones de rendimiento para garantizar que tu aplicación siga siendo rápida y eficiente. Aquí tienes algunas consideraciones clave:

1. **Evita la creación innecesaria de instancias:**
Al crear Custom Hooks, ten en cuenta que cada vez que se llama a un Custom Hook, se crea una nueva instancia de sus variables de estado y funciones. Evita llamar a Custom Hooks dentro de bucles, condiciones o en lugares donde no sea necesario, ya que esto puede generar instancias innecesarias y consumir recursos.
2. **Minimiza el uso de efectos secundarios:**
Los Custom Hooks pueden contener efectos secundarios a través del Hook useEffect. Asegúrate de minimizar el número de efectos secundarios y de gestionar cuidadosamente sus dependencias para evitar que se ejecuten innecesariamente y ralenticen la aplicación.
3. **Optimize la actualización del estado:**
Si tu Custom Hook maneja el estado interno utilizando el Hook useState, ten en cuenta que la actualización del estado puede provocar un nuevo renderizado del componente que lo utiliza. Intenta optimizar la actualización del estado utilizando técnicas como la desestructuración de objetos para evitar la creación de nuevos objetos en cada actualización.
4. **Memoización de funciones:**
Si tu Custom Hook devuelve funciones que se utilizan como callbacks en componentes hijos, considera memoizar esas funciones utilizando el Hook useCallback. Esto ayuda a evitar que se creen nuevas funciones en cada renderizado y mejora el rendimiento, especialmente en componentes con muchos hijos.
5. **Pruebas de rendimiento:**
Realiza pruebas de rendimiento en tu aplicación para identificar cualquier cuello de botella o áreas de mejora relacionadas con el uso de Custom Hooks. Puedes utilizar herramientas como React DevTools Profiler para analizar el rendimiento de tus componentes y Custom Hooks.
6. **Evita el abuso de los efectos secundarios:**
Aunque los efectos secundarios son útiles para realizar tareas asincrónicas o de suscripción, evita abusar de ellos en tus Custom Hooks. Los efectos secundarios pueden ralentizar el renderizado y hacer que tu aplicación sea menos predecible.
7. **Revisión de dependencias de efectos:**
Asegúrate de revisar y gestionar correctamente las dependencias de los efectos secundarios en tus Custom Hooks para evitar efectos secundarios inesperados y ciclos de renderizado infinitos. Utiliza las dependencias adecuadas para garantizar que los efectos secundarios se ejecuten solo cuando sea necesario.

Siguiendo estas consideraciones de rendimiento al utilizar Custom Hooks en React, puedes garantizar que tu aplicación sea rápida y eficiente incluso cuando utilices Hooks para abstraer la lógica compleja y reutilizable.

## Patrones de diseño comunes para Custom Hooks.

Existen varios patrones de diseño comunes que se utilizan al crear Custom Hooks en React. Estos patrones ayudan a estructurar y organizar los Hooks de manera eficiente y reutilizable. Aquí tienes algunos de los patrones de diseño más comunes para Custom Hooks:


1. **Patrón de estado localizado:**

Este patrón consiste en crear Custom Hooks que manejan su propio estado localizado. Esto permite encapsular la lógica de estado en el Hook y reutilizarla en diferentes componentes sin compartir el estado con otros componentes.

2. **Patrón de estado compartido:**

En este patrón, se crea un Custom Hook para manejar el estado compartido entre múltiples componentes. Esto se logra utilizando el contexto de React para proporcionar un estado global que puede ser accedido por diferentes componentes a través del Hook.

3. **Patrón de lógica reutilizable:**

Este patrón se utiliza para encapsular lógica reutilizable en un Custom Hook. Por ejemplo, puedes crear un Hook para manejar la lógica de paginación, la lógica de ordenación de datos, o la lógica de validación de formularios, y reutilizarlo en diferentes partes de tu aplicación.

4. **Patrón de subscripción a eventos:**

Este patrón se utiliza para encapsular la lógica de subscripción a eventos en un Custom Hook. Por ejemplo, puedes crear un Hook para subscribirte a eventos de teclado, eventos de scroll, eventos de red, etc., y reutilizarlo en diferentes componentes que necesiten esa funcionalidad.

5. **Patrón de integración con APIs externas:**

Este patrón se utiliza para encapsular la lógica de integración con APIs externas en un Custom Hook. Por ejemplo, puedes crear un Hook para manejar las llamadas a una API REST o GraphQL, y reutilizarlo en diferentes componentes que necesiten interactuar con esa API.

6. **Patrón de manejo de efectos secundarios:**

En este patrón, se crea un Custom Hook para manejar efectos secundarios como llamadas a APIs, suscripciones a eventos, etc. Esto permite encapsular la lógica de efectos secundarios en el Hook y reutilizarla en diferentes componentes de manera modular.
Estos son solo algunos ejemplos de patrones de diseño comunes para Custom Hooks en React. La elección del patrón dependerá de los requisitos específicos de tu aplicación y de cómo desees organizar y estructurar tu código. Al seguir estos patrones de diseño, puedes crear Custom Hooks que sean eficientes, reutilizables y fáciles de mantener en tu aplicación.

# Uso Avanzado de Custom Hooks

## Custom Hooks que aceptan argumentos.
Los Custom Hooks en React pueden aceptar argumentos de la misma manera que las funciones regulares de JavaScript. Esto permite que los Custom Hooks sean más flexibles y puedan adaptarse a diferentes escenarios de uso. Aquí tienes un ejemplo de un Custom Hook que acepta argumentos:

```javascript

import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup tasks, if any
    };
  }, [url]); // Dependencia: url

  return { data, isLoading, error };
}

export default useFetchData;
```
En este ejemplo, el Custom Hook useFetchData acepta un argumento url, que es la URL de la API a la que se hará la solicitud de datos. Cuando un componente llama a este Custom Hook, puede proporcionar la URL específica que desea utilizar para recuperar los datos.

Ejemplo de uso en un componente:

```javascript

import React from 'react';
import useFetchData from './useFetchData';

function MyComponent() {
  const { data, isLoading, error } = useFetchData('https://api.example.com/data');

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Renderizar los datos
  return (
    <div>
      {/* Renderizar los datos */}
    </div>
  );
}

export default MyComponent;
```
Al proporcionar argumentos a un Custom Hook, puedes personalizar su comportamiento y hacerlo más reutilizable en diferentes partes de tu aplicación. Esto permite crear Hooks más flexibles y adaptativos para diversas necesidades.
## Custom Hooks que devuelven valores y funciones.

Por supuesto, aquí tienes un ejemplo de un Custom Hook que devuelve tanto valores como funciones:

```javascript

import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // Función para incrementar el contador
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Función para restablecer el contador al valor inicial
  const reset = () => {
    setCount(initialValue);
  };

  // Devolver tanto el valor actual del contador como las funciones para modificarlo
  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;
```
En este ejemplo, el Custom Hook useCounter devuelve un objeto que contiene el valor actual del contador (count) y tres funciones para manipularlo: increment, decrement y reset. Estas funciones se utilizan para aumentar, disminuir y restablecer el valor del contador, respectivamente.

Ahora, puedes usar este Custom Hook en tus componentes de la siguiente manera:

```javascript

import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default CounterComponent;
```
Este Custom Hook proporciona una forma sencilla y reutilizable de manejar el estado del contador en tus componentes de React, permitiendo una mayor modularidad y legibilidad del código.

## Ejemplos de Custom Hooks más complejos.

1. Custom Hook para manejar la autenticación del usuario con un servidor:
```javascript

import { useState, useEffect } from 'react';

function useAuthentication() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Lógica para verificar la sesión del usuario en el servidor
        const user = await authenticateUser(); // Función para autenticar al usuario en el servidor
        setUser(user);
      } catch (error) {
        // Manejo de errores
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    return () => {
      // Lógica de limpieza (cleanup), si es necesario
    };
  }, []);

  const login = async (credentials) => {
    try {
      // Lógica para iniciar sesión en el servidor
      const user = await loginUser(credentials); // Función para iniciar sesión en el servidor
      setUser(user);
    } catch (error) {
      // Manejo de errores
    }
  };

  const logout = async () => {
    try {
      // Lógica para cerrar sesión en el servidor
      await logoutUser(); // Función para cerrar sesión en el servidor
      setUser(null);
    } catch (error) {
      // Manejo de errores
    }
  };

  return { user, isLoading, login, logout };
}

export default useAuthentication;
```
2. Custom Hook para manejar la suscripción a eventos del teclado:
```javascript

import { useState, useEffect } from 'react';

function useKeyboardEvent(key, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeyboardEvent;
```
3. Custom Hook para manejar la paginación de resultados:
```javascript

import { useState } from 'react';

function usePagination(initialPage = 1, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  
  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;
  
  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex
  };
}

export default usePagination;
```
Estos ejemplos muestran cómo puedes crear Custom Hooks más complejos para manejar funcionalidades específicas en tus aplicaciones de React. Al encapsular esta lógica en Custom Hooks, puedes reutilizarla fácilmente en diferentes partes de tu aplicación, lo que mejora la modularidad y la legibilidad del código.
