# 1. Intro React

## ¿Qué es React?

1. Breve introducción a React.
2. Características principales.

## Creación de Componentes

1. Componentes funcionales vs. componentes de clase.
2. JSX: Sintaxis para escribir componentes.
3. Props y State: Manipulación de datos en componentes.

## Ciclo de Vida de los Componentes

1. Montaje, actualización y desmontaje de componentes.
2. Métodos del ciclo de vida: componentDidMount, componentDidUpdate, componentWillUnmount, etc.

## Enrutamiento en React

1. Introducción a React Router.
2. Configuración básica de rutas.
3. Uso de parámetros y redirecciones.

# 2. Hooks

## Introducción a React Hooks

1. ¿Qué es React?
2. ¿Por qué usar React?
3. Principales características y ventajas.

## useState

1. Introducción al Hook useState.
2. Uso de useState para manejar el estado en componentes funcionales.
3. Ejemplos prácticos de uso de useState.

## useEffect

1. Introducción al Hook useEffect.
2. Uso de useEffect para manejar efectos secundarios en componentes funcionales.
3. Ejemplos prácticos de uso de useEffect.

## useContext

1. Introducción al Hook useContext.
2. Uso de useContext para acceder a un contexto en componentes funcionales.
3. Ejemplos prácticos de uso de useContext.

## Custom Hooks

1. ¿Qué son los Custom Hooks?
2. Creación de Custom Hooks.
3. Ejemplos de casos de uso para Custom Hooks.

# 3. Custom Hooks

## Introducción a los Custom Hooks

1. ¿Qué son los Custom Hooks?
2. Ventajas de utilizar Custom Hooks.
3. Ejemplos de situaciones en las que los Custom Hooks son útiles.

## Creación de Custom Hooks

1. Estructura de un Custom Hook.
2. Pautas de nomenclatura para los Custom Hooks.
3. Ejemplos prácticos de creación de Custom Hooks simples.

## Ejemplos Prácticos de Custom Hooks

1. Custom Hooks para el manejo de formularios.
2. Custom Hooks para el manejo de peticiones HTTP.
3. Ejemplos de casos de uso comunes para Custom Hooks.

## Optimización y Buenas Práctica

1. Mejores prácticas al crear Custom Hooks.
2. Consideraciones de rendimiento al utilizar Custom Hooks.
3. Patrones de diseño comunes para Custom Hooks.

## Uso Avanzado de Custom Hooks

1. Custom Hooks que aceptan argumentos.
2. Custom Hooks que devuelven valores y funciones.
3. Ejemplos de Custom Hooks más complejos.

# 4. Lifecycle

## Introducción al Ciclo de Vida de los Componentes

1. ¿Qué es el ciclo de vida de un componente en React?
2. Importancia del entendimiento del ciclo de vida.
3. Diferencia entre componentes funcionales y de clase en términos de ciclo de vida.

## Fase de Montaje

1. constructor(): Inicialización del estado y enlace de métodos.
2. render(): Renderización inicial del componente.
3. componentDidMount(): Acciones posteriores al montaje, como solicitudes de datos y suscripciones a eventos.

## Fase de Actualización

1. shouldComponentUpdate(): Control de la actualización del componente.
2. render(): Renderización actualizada del componente.
3. componentDidUpdate(): Acciones posteriores a la actualización, como actualización de estado basadas en cambios de props.

## Fase de Desmontaje

1. componentWillUnmount(): Limpieza antes de que el componente se desmonte, como cancelación de solicitudes de datos y eliminación de suscripciones a eventos.

## Métodos de Ciclo de Vida Adicionales

1. static getDerivedStateFromProps(): Actualización del estado basado en cambios de props.
2. componentDidCatch(): Manejo de errores en componentes hijos.

# 5. Redux

En esta clase, los participantes aprenderán sobre React Redux, una biblioteca que facilita la administración del estado en aplicaciones React mediante la implementación de un contenedor de estado global.

## Introducción a Redux:

1. ¿Qué es Redux?
2. Principios básicos de Redux: unidireccionalidad de datos almacenamiento inmutable, etc.
3. Razones para usar Redux en aplicaciones React.

## Conceptos Fundamentales de Redux:

1. Store: contenedor de estado único en la aplicación.
2. Actions: objetos que describen un cambio de estado.
3. Reducers: funciones puras que especifican cómo cambia el estado en respuesta a una acción.

## Instalación y Configuración de Redux:

1. Instalación de la biblioteca Redux y React Redux.
2. Configuración de un store Redux en una aplicación React.

## Conectando Componentes a Redux:

1. Uso del componente Provider para proporcionar el store a la aplicación.
2. Uso de la función connect() para conectar componentes a Redux y mapear el estado y las acciones a las props del componente.

## Uso de Redux en Aplicaciones React:

1. Dispatching de acciones para realizar cambios en el estado.
2. Acceso al estado global en componentes conectados.
3. Actualización del estado a través de reducers.

# 6. Fetching

## Introducción a Fetch API

1. ¿Qué es Fetch API?
2. Diferencias entre Fetch y XMLHttpRequest.
3. Ventajas de utilizar Fetch API en aplicaciones React.

## Realización de Solicitudes GET

1. Uso básico de Fetch para realizar solicitudes GET a un servidor.
2. Manejo de promesas y respuestas en Fetch.
3. Ejemplos prácticos de solicitudes GET en una aplicación React.

## Envío de Datos con Fetch

1. Realización de solicitudes POST con Fetch para enviar datos al servidor.
2. Uso de opciones de configuración en Fetch para personalizar las solicitudes.
3. Ejemplos prácticos de envío de datos en una aplicación React.

## Manejo de Respuestas

1. Manejo de diferentes tipos de respuestas: JSON, texto, blobs, etc.
2. Validación y manejo de errores en las respuestas de Fetch.
3. Transformación de datos de respuesta para adaptarlos al estado de la aplicación.

## Integración con el Estado de la Aplicación

1. Actualización del estado de la aplicación con datos obtenidos mediante Fetch.
2. Uso de useState y useEffect para gestionar el ciclo de vida de los componentes y las solicitudes de datos.
3. Ejemplos prácticos de integración de Fetch con el estado de la aplicación en React.

# 7. Firebase

## Introducción a Firebase

1. ¿Qué es Firebase?
2. Características principales de Firebase: base de datos en tiempo real, autenticación de usuarios, almacenamiento de archivos, etc.
3. Ventajas de utilizar Firebase en aplicaciones React.

## Configuración del Proyecto Firebase

1. Creación de un nuevo proyecto Firebase en la consola de Firebase.
2. Configuración de la aplicación React para utilizar Firebase.
3. Integración de la biblioteca Firebase en la aplicación React.

## Autenticación de Usuarios con Firebase Authentication

1. Configuración de la autenticación de usuarios en Firebase.
2. Uso de Firebase Authentication en la aplicación React para permitir que los usuarios inicien sesión y se registren.
3. Ejemplos prácticos de autenticación de usuarios en una aplicación React.

## Almacenamiento de Datos en Tiempo Real con Firebase Realtime Database

1. Introducción a Firebase Realtime Database.
2. Configuración de la base de datos en tiempo real en Firebase.
3. Uso de Firebase Realtime Database en la aplicación React para almacenar y sincronizar datos en tiempo real.
4. Ejemplos prácticos de almacenamiento de datos en tiempo real en una aplicación React.

## Almacenamiento de Archivos con Firebase Storage

1. Configuración de Firebase Storage para almacenamiento de archivos.
2. Uso de Firebase Storage en la aplicación React para cargar y descargar archivos.
3. Ejemplos prácticos de almacenamiento de archivos en una aplicación React.

# 8. Rendering

## Introducción al Rendering en React

1. ¿Qué es el rendering en React?
2. Importancia del rendering eficiente en aplicaciones React.
3. Conceptos básicos de la virtual DOM.

## Virtual DOM en React

1. Explicación del concepto de virtual DOM.
2. Diferencias entre la virtual DOM y la DOM del navegador.
3. Ventajas de utilizar la virtual DOM en React.

## Reconciliación en React

1. Proceso de reconciliación en React.
2. Cómo React determina qué componentes deben ser actualizados.
3. Algoritmo de reconciliación y su impacto en el rendimiento.

## Métodos de Ciclo de Vida Relacionados con el Rendering

1. Métodos render(), componentDidUpdate(), shouldComponentUpdate(), etc.
2. Uso de estos métodos para controlar el rendering de componentes.
3. Ejemplos prácticos de cómo utilizar estos métodos para optimizar el rendering.

## Memoización y PureComponent

1. Concepto de memoización en React.
2. Uso de React.memo y PureComponent para evitar rendering innecesario.
3. Ejemplos prácticos de memoización en componentes funcionales y clases.

# 9. CRUD##React##Nodejs

## Introducción al CRUD

1. ¿Qué es CRUD?
2. Importancia de CRUD en el desarrollo de aplicaciones web.
3. Objetivo de la clase: crear un sistema CRUD completo utilizando React y Node.js.

## Configuración del Proyecto

1. Configuración del proyecto React utilizando Create React App.
2. Configuración del proyecto Node.js utilizando Express.js.
3. Establecimiento de la conexión entre el frontend y el backend.

## Implementación del Backend con Node.js

1. Creación de rutas para manejar las operaciones CRUD (GET, POST, PUT, DELETE).
2. Configuración de controladores para cada operación CRUD.
3. Uso de una base de datos (por ejemplo, MongoDB) para almacenar los datos.

## Desarrollo del Frontend con React

1. Creación de componentes para listar, crear, actualizar y eliminar elementos.
2. Implementación de formularios para la creación y actualización de elementos.
3. Integración de llamadas a la API del backend para realizar operaciones CRUD.

## Prueba y Depuración

1. Prueba del sistema CRUD completo.
2. Identificación y resolución de posibles errores y problemas de funcionamiento.

## Despliegue de la Aplicación

1. Breve discusión sobre las opciones de despliegue para la aplicación completa (frontend y backend).
2. Recomendaciones sobre cómo desplegar la aplicación en un entorno de producción.

# 10. Typescript

## Introducción a TypeScript

1. ¿Qué es TypeScript?
2. Ventajas de utilizar TypeScript en proyectos de React.
3. Breve comparación entre JavaScript y TypeScript.

## Configuración del Proyecto con TypeScript

1. Creación de un nuevo proyecto de React con TypeScript utilizando Create React App.
2. Configuración del entorno de desarrollo para trabajar con TypeScript en Visual Studio Code u otros editores.

## Tipos Básicos en TypeScript

1. Tipos primitivos: string, number, boolean, etc.
2. Tipos complejos: arrays, objetos, tuplas, etc.
3. Uso de tipos opcionales y tipos de unión.

## Tipado en Componentes de React

1. Uso de interfaces y tipos para definir las props de los componentes.
2. Tipado de estados de componentes con useState.
3. Ejemplos prácticos de tipado en componentes de React.

## Generics en TypeScript

1. Introducción a los generics en TypeScript.
2. Uso de generics en funciones y componentes de React.
3. Ejemplos prácticos de generics en aplicaciones React.

## Tipado en Eventos y Refs

1. Tipado en manejadores de eventos en componentes de React.
2. Tipado en referencias (refs) a elementos del DOM.
3. Ejemplos prácticos de tipado en eventos y refs en React.

# 11. Proyecto final

# Eccomerce integrando MERN (Mongo, Express, React, Nodejs)