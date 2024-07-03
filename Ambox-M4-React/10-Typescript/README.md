# 10. Typescript

# Introducción a TypeScript

## ¿Qué es TypeScript?

TypeScript es un lenguaje de programación desarrollado por Microsoft que extiende la sintaxis de JavaScript al agregarle tipado estático. Esto significa que puedes declarar el tipo de datos de las variables, parámetros de funciones y valores de retorno de funciones. El código TypeScript luego se compila a JavaScript para ser ejecutado en cualquier entorno que admita JavaScript. Esta adición de tipado estático hace que TypeScript sea más robusto y menos propenso a errores que JavaScript puro, especialmente en proyectos grandes y complejos. Además del tipado estático, TypeScript también ofrece otras características como clases, interfaces, enumeraciones y módulos, que no están presentes en JavaScript estándar.

## Ventajas de utilizar TypeScript en proyectos de React.

Utilizar TypeScript en proyectos de React ofrece varias ventajas:

1. Tipado estático: TypeScript permite definir tipos para props, estado y otras estructuras de datos en React, lo que ayuda a detectar errores de tipo en tiempo de compilación y facilita el mantenimiento del código. Esto puede reducir significativamente los errores durante el desarrollo y mejorar la calidad del código.
2. Mejor autocompletado y herramientas de desarrollo: Al proporcionar información sobre los tipos de datos, TypeScript mejora la experiencia de desarrollo al ofrecer un autocompletado más preciso y proporcionar más información contextual en los editores de código y herramientas de desarrollo.
3. Refactorización más segura: Gracias al tipado estático, las herramientas de refactorización pueden realizar cambios de manera más segura, ya que pueden identificar automáticamente todas las referencias a una función, componente o tipo de datos específico.
4. Documentación integrada: TypeScript permite documentar de manera más clara los componentes, funciones y tipos de datos mediante la adición de comentarios de JSDoc o mediante el uso de anotaciones de tipo directamente en el código. Esto hace que el código sea más legible y comprensible para otros desarrolladores.
5. Mejora la colaboración en equipos: Con TypeScript, es más fácil para los miembros del equipo comprender y colaborar en el código, ya que los tipos proporcionan una forma de comunicar de manera clara la intención del código y sus estructuras de datos.
6. Interoperabilidad con JavaScript: TypeScript es compatible con JavaScript, lo que significa que puedes integrarlo gradualmente en proyectos existentes sin necesidad de reescribir todo el código. Esto permite una migración suave hacia TypeScript en proyectos React ya establecidos.

En resumen, TypeScript ofrece una serie de beneficios que pueden mejorar la calidad, la mantenibilidad y la eficiencia del desarrollo en proyectos de React, especialmente en entornos empresariales o proyectos de gran escala.

## Breve comparación entre JavaScript y TypeScript.

Aquí tienes una breve comparación entre JavaScript y TypeScript:

JavaScript:

1. Lenguaje de programación de script ampliamente utilizado para el desarrollo web y más allá.
2. Tipado dinámico: las variables no están asociadas a tipos de datos específicos y pueden cambiar durante la ejecución del programa.
3. Sintaxis flexible y menos estricta: permite una rápida prototipación y flexibilidad en el desarrollo.
4. Propenso a errores de tipo durante el tiempo de ejecución debido a la falta de tipado estático.
5. Mayor libertad en el desarrollo pero también puede resultar en código menos predecible y más propenso a errores en proyectos grandes y complejos.

TypeScript:

1. Un superconjunto de JavaScript que agrega tipado estático opcional y características adicionales.
2. Tipado estático: las variables, parámetros de función y valores de retorno de función pueden ser explícitamente tipados, lo que permite detectar errores de tipo en tiempo de compilación.
3. Sintaxis más estricta: requiere una definición clara de tipos de datos y estructuras, lo que puede llevar a un código más seguro y mantenible.
4. Mejora la experiencia de desarrollo al proporcionar autocompletado mejorado, herramientas de refactorización y detección de errores en tiempo de compilación.
5. Facilita la colaboración en equipos y la documentación del código gracias a la claridad de los tipos de datos y la intención del código.

En resumen, JavaScript es un lenguaje flexible y ampliamente utilizado, mientras que TypeScript agrega características de tipado estático y otras funcionalidades que pueden mejorar la calidad y la mantenibilidad del código, especialmente en proyectos grandes y complejos. La elección entre JavaScript y TypeScript depende de los requisitos del proyecto, la experiencia del equipo y las preferencias personales del desarrollador.

# Configuración del Proyecto con TypeScript

## Creación de un nuevo proyecto de React con TypeScript utilizando Create React App.

Para crear un nuevo proyecto de React con TypeScript utilizando Create React App, sigue estos pasos:

1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde aquí.
2. Abre tu terminal o línea de comandos.
3. Ejecuta el siguiente comando para instalar Create React App globalmente si aún no lo tienes instalado:

```bash
npm install -g create-react-app
```

4. Una vez instalado, puedes crear un nuevo proyecto de React con TypeScript ejecutando el siguiente comando:

```bash
npx create-react-app my-app --template typescript
```

Donde my-app es el nombre de tu proyecto. Puedes reemplazarlo con el nombre que desees.

5. Una vez que se complete la instalación, accede al directorio de tu nuevo proyecto:

```bash

cd my-app
```

6. Ahora puedes iniciar tu aplicación ejecutando:

```bash
npm start
```

Este comando iniciará un servidor de desarrollo y abrirá tu nueva aplicación de React en tu navegador predeterminado. Ahora estás listo para comenzar a desarrollar tu aplicación utilizando TypeScript en React.

¡Y eso es todo! Ahora tienes un nuevo proyecto de React configurado con TypeScript utilizando Create React App. Puedes comenzar a desarrollar tu aplicación editando los archivos en el directorio src de tu proyecto.

## Configuración del entorno de desarrollo para trabajar con TypeScript en Visual Studio Code u otros editores.

Configurar el entorno de desarrollo para trabajar con TypeScript en Visual Studio Code u otros editores es bastante sencillo. Aquí hay algunos pasos generales que puedes seguir:

1. Instala TypeScript: Asegúrate de tener TypeScript instalado globalmente en tu sistema. Puedes instalarlo utilizando npm con el siguiente comando:

```bash
npm install -g typescript
```

2. Configura tu proyecto: Si estás trabajando en un proyecto existente de TypeScript, asegúrate de tener un archivo tsconfig.json en la raíz de tu proyecto. Este archivo define la configuración del compilador TypeScript. Puedes generar un archivo tsconfig.json ejecutando el siguiente comando en la raíz de tu proyecto:

```bash
tsc --init
```

Esto generará un archivo de configuración inicial que puedes personalizar según tus necesidades.

3. Editor de código: Si estás utilizando Visual Studio Code, TypeScript se integra de manera nativa. Sin embargo, si estás utilizando otro editor, es posible que necesites instalar extensiones específicas para obtener compatibilidad con TypeScript. En Visual Studio Code, algunas extensiones útiles incluyen "TypeScript Extension Pack" y "Prettier - Code formatter" para formatear automáticamente tu código.
4. Configuración del editor: Puedes personalizar la configuración del editor para que se ajuste a tus preferencias. Por ejemplo, en Visual Studio Code, puedes abrir el archivo settings.json y agregar configuraciones específicas de TypeScript, como reglas de formato o sugerencias de autocompletado.
5. Depuración: Configura tu entorno de depuración para trabajar con TypeScript. En Visual Studio Code, esto generalmente se hace mediante el uso de archivos launch.json para configurar la depuración en tu proyecto.
6. Comandos de TypeScript: Si prefieres trabajar desde la línea de comandos, puedes usar los comandos de TypeScript directamente. Por ejemplo, puedes compilar tu proyecto ejecutando tsc en la raíz de tu proyecto.

Con estos pasos, deberías tener un entorno de desarrollo listo para trabajar con TypeScript en tu editor de código preferido. Recuerda consultar la documentación específica de tu editor y de TypeScript para obtener más detalles sobre la configuración y las funcionalidades disponibles.

## Tipos Básicos en TypeScript

1. Tipos primitivos: string, number, boolean, etc.

Los tipos primitivos en TypeScript son similares a los de JavaScript, pero TypeScript agrega la capacidad de definir tipos estáticos para variables y estructuras de datos. Aquí tienes una descripción de los tipos primitivos más comunes en TypeScript:

1. string: Representa datos de texto. Pueden contener letras, números, caracteres especiales, etc. Se definen utilizando comillas simples (''), comillas dobles ("") o comillas invertidas (``).

```typescript
let nombre: string = "Juan";
```

2. number: Representa datos numéricos. Pueden ser números enteros o de punto flotante.

```typescript
let edad: number = 30;
```

3. boolean: Representa valores de verdad (verdadero o falso).

```typescript
let esMayorDeEdad: boolean = true;
```

4. null y undefined: Estos tipos representan los valores null y undefined, respectivamente. Son subtipos de todos los otros tipos.

```typescript
let variableNull: null = null;
let variableUndefined: undefined = undefined;
```

5. void: Representa la ausencia de tipo. Se usa generalmente como tipo de retorno de funciones que no devuelven ningún valor explícito.

```typescript
function saludar(): void {
  console.log("¡Hola mundo!");
}
```

6. any: Representa un tipo dinámico que puede ser cualquier tipo. Se utiliza cuando no se conoce el tipo de una variable en tiempo de compilación o cuando se está migrando código existente a TypeScript.

```typescript
let variable: any = "Hola";
variable = 10; // Ahora es un número
variable = true; // Ahora es un booleano
```

Estos son algunos de los tipos primitivos más comunes en TypeScript. Además de estos, TypeScript también permite la creación de tipos personalizados utilizando interfaces, uniones, intersecciones y otros mecanismos avanzados de tipado.

## Tipos complejos: arrays, objetos, tuplas, etc.

En TypeScript, además de los tipos primitivos como string, number, boolean, etc., también puedes trabajar con tipos complejos que incluyen arrays, objetos, tuplas, entre otros. Aquí tienes una descripción de algunos de los tipos complejos más comunes en TypeScript:

1. Arrays: Los arrays en TypeScript te permiten almacenar múltiples valores del mismo tipo. Puedes definir un array utilizando la sintaxis de corchetes ([]) o utilizando el tipo genérico Array<T>.

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];
let palabras: Array<string> = ["hola", "mundo"];
```

2. Objetos: Los objetos en TypeScript te permiten definir estructuras de datos con propiedades y valores. Puedes especificar los tipos de las propiedades dentro del objeto.

```typescript
let persona: { nombre: string; edad: number } = {
  nombre: "Juan",
  edad: 30,
};
```

3. Tuplas: Las tuplas son arrays con un número fijo de elementos donde cada elemento tiene un tipo específico conocido. Pueden ser útiles para representar estructuras de datos heterogéneas.

```typescript
let tupla: [string, number] = ["hola", 5];
```

4. Enums: Los enums permiten definir un conjunto de constantes con nombres amigables. Son útiles cuando necesitas trabajar con un conjunto finito de valores conocidos.

```typescript
enum DiaSemana {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo,
}

let dia: DiaSemana = DiaSemana.Lunes;
```

5. Uniones: Las uniones te permiten combinar varios tipos en uno solo. Puedes usar uniones para declarar variables que pueden contener varios tipos diferentes.

```typescript
let resultado: number | string;
resultado = 10; // Válido
resultado = "Error"; // También válido
```

Estos son solo algunos ejemplos de tipos complejos en TypeScript. TypeScript ofrece una amplia gama de herramientas para trabajar con tipos complejos de manera segura y eficiente, lo que te permite definir estructuras de datos más complejas y expresivas en tus programas.

## Uso de tipos opcionales y tipos de unión.

Los tipos opcionales y los tipos de unión son características importantes en TypeScript que te permiten definir tipos flexibles para tus variables y estructuras de datos. Aquí te explico cómo usar cada uno de ellos:

1. Tipos Opcionales:
   Los tipos opcionales te permiten declarar que una variable puede tener un valor o puede ser undefined. Esto es útil cuando una propiedad de un objeto puede estar presente o ausente.

```typescript
// Declaración de una variable con tipo opcional
let telefono: string | undefined;

// Asignación de un valor
telefono = "123456789";

// Asignación de undefined
telefono = undefined;

// Función con parámetro opcional
function saludar(nombre: string, apellido?: string) {
  if (apellido) {
    console.log(`Hola, ${nombre} ${apellido}!`);
  } else {
    console.log(`Hola, ${nombre}!`);
  }
}

saludar("Juan"); // Hola, Juan!
saludar("María", "García"); // Hola, María García!
```

2. Tipos de Unión:
   Los tipos de unión te permiten declarar una variable que puede tener más de un tipo de dato. Esto es útil cuando una variable puede tener diferentes tipos de valores en diferentes contextos.

```typescript
// Declaración de una variable con tipo de unión
let resultado: number | string;

// Asignación de un número
resultado = 10;

// Asignación de una cadena
resultado = "Error";

// Función con retorno de tipo de unión
function obtenerResultado(): number | string {
  if (Math.random() < 0.5) {
    return 10;
  } else {
    return "Error";
  }
}

let valor: number | string = obtenerResultado();
```

Los tipos opcionales y los tipos de unión te permiten escribir código más flexible y seguro en TypeScript al definir estructuras de datos y funciones que pueden manejar una variedad de situaciones y valores. Utiliza estas características según tus necesidades específicas para mejorar la claridad y la robustez de tu código.

## Tipado en Componentes de React

## Uso de interfaces y tipos para definir las props de los componentes.

En React, es común utilizar interfaces o tipos de TypeScript para definir las props de los componentes. Esto ayuda a proporcionar una documentación clara sobre qué props se esperan y sus tipos asociados, lo que facilita el mantenimiento y la detección de errores durante el desarrollo. Aquí te muestro cómo hacerlo:

1. Usando Interfaces:
   Las interfaces te permiten definir la forma de un objeto en TypeScript. Puedes definir una interfaz para las props de un componente de la siguiente manera:

```typescript
interface Props {
  nombre: string;
  edad: number;
  estaCasado: boolean;
}

const MiComponente: React.FC<Props> = ({ nombre, edad, estaCasado }) => {
  // ...
};
```

2. Usando Tipos:
   Los tipos en TypeScript permiten definir una forma de datos, similar a las interfaces. Puedes definir un tipo para las props de un componente de la siguiente manera:

```typescript
type Props = {
  nombre: string;
  edad: number;
  estaCasado: boolean;
};

const MiComponente: React.FC<Props> = ({ nombre, edad, estaCasado }) => {
  // ...
};
```

En ambos casos, hemos definido una estructura de datos que describe las props esperadas por el componente MiComponente. Luego, usamos esta estructura de datos como un tipo genérico para el componente React.FC (Función de Componente) que indica que el componente aceptará props con esa estructura.

Al utilizar interfaces o tipos para definir las props de los componentes, obtienes los siguientes beneficios:

- Documentación clara: Ayuda a documentar claramente qué props se esperan y sus tipos asociados.
- Detección de errores: TypeScript puede detectar errores de tipado durante el desarrollo si las props pasadas al componente no coinciden con la estructura definida.
- Mejora de la autocompletado: Los editores de código pueden ofrecer autocompletado mejorado basado en la definición de las props.
- Facilita el mantenimiento: Facilita la refactorización y el mantenimiento del código al proporcionar una estructura definida y clara para las props del componente.

En resumen, el uso de interfaces o tipos para definir las props de los componentes en React con TypeScript es una práctica recomendada que mejora la claridad, la robustez y la calidad del código.

## Tipado de estados de componentes con useState.

Al utilizar el hook useState en componentes de React con TypeScript, es importante proporcionar un tipo adecuado para el estado. Esto permite que TypeScript infiera y valide los tipos de datos correctamente durante el desarrollo. Aquí tienes cómo puedes tipar el estado de un componente con useState:

Supongamos que tenemos un componente que muestra un contador:

```typescript
import React, { useState } from "react";

const MiComponente: React.FC = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default MiComponente;
```

Para tipar el estado del contador, podemos hacer lo siguiente:

```typescript
import React, { useState } from "react";

const MiComponente: React.FC = () => {
  const [contador, setContador] = useState<number>(0); // Tipo number para el contador

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default MiComponente;
```

Aquí, hemos proporcionado el tipo number como un parámetro genérico para useState, lo que indica que el estado contador debe ser de tipo number.

Puedes aplicar el mismo enfoque para tipos más complejos, como objetos o arrays:

```typescript
import React, { useState } from "react";

interface Usuario {
  nombre: string;
  edad: number;
}

const MiComponente: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({ nombre: "", edad: 0 }); // Tipo Usuario para el estado

  const actualizarUsuario = () => {
    setUsuario({ nombre: "Juan", edad: 30 });
  };

  return (
    <div>
      <p>
        Nombre: {usuario.nombre}, Edad: {usuario.edad}
      </p>
      <button onClick={actualizarUsuario}>Actualizar Usuario</button>
    </div>
  );
};

export default MiComponente;
```

Al proporcionar tipos adecuados para el estado de los componentes con useState, TypeScript puede ayudarte a detectar errores de tipo durante el desarrollo y garantizar que tu código sea más robusto y fácil de mantener.

## Ejemplos prácticos de tipado en componentes de React.

Componente Funcional con Props:
Definamos un componente funcional que acepte props y muestre el nombre de un usuario:

```typescript
import React from "react";

interface Props {
  nombre: string;
}

const Saludo: React.FC<Props> = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};

export default Saludo;
```

En este ejemplo, hemos definido una interfaz Props que especifica que el componente espera recibir una prop nombre de tipo string.

Componente de Clase con Props y Estado:
Ahora, definamos un componente de clase que acepte props y mantenga un estado interno para contar clics:

```typescript
import React, { Component } from "react";

interface Props {
  mensaje: string;
}

interface State {
  contador: number;
}

class ContadorClicks extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    const { mensaje } = this.props;
    const { contador } = this.state;
    return (
      <div>
        <p>{mensaje}</p>
        <p>Contador: {contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClicks;
```

En este ejemplo, hemos definido una interfaz Props que especifica que el componente espera recibir una prop mensaje de tipo string, y una interfaz State que especifica que el estado interno del componente tendrá una propiedad contador de tipo number.

Componente Funcional con Props Opcionales:
A veces, quieres que algunas props sean opcionales. Aquí hay un ejemplo de cómo hacerlo:

```typescript
import React from "react";

interface Props {
  mensaje: string;
  opcional?: number; // Prop opcional
}

const SaludoOpcional: React.FC<Props> = ({ mensaje, opcional }) => {
  return (
    <div>
      <p>{mensaje}</p>
      {opcional && <p>Valor Opcional: {opcional}</p>}
    </div>
  );
};

export default SaludoOpcional;
```

En este ejemplo, hemos definido la prop opcional con un signo de interrogación (?), lo que indica que es opcional.

Estos son solo algunos ejemplos prácticos de cómo puedes aplicar el tipado en componentes de React con TypeScript. Utilizar el tipado adecuado puede ayudarte a evitar errores y mejorar la robustez de tu código.

## Generics en TypeScript

1. Introducción a los generics en TypeScript.

Los generics en TypeScript son una característica poderosa que te permite escribir código flexible y reutilizable al trabajar con tipos de datos. Permiten escribir funciones, clases y tipos que pueden trabajar con diferentes tipos de datos sin perder información sobre esos tipos. Los generics se utilizan comúnmente en bibliotecas y frameworks para crear estructuras de datos y algoritmos que son independientes del tipo de datos específico con el que trabajan.

Aquí tienes una introducción básica a cómo funcionan los generics en TypeScript:

1. Definición de un Generic Type:
   Puedes definir un tipo genérico utilizando un parámetro de tipo, que se representa entre corchetes angulares (<>). Por ejemplo:

```typescript
function identidad<T>(arg: T): T {
  return arg;
}
```

En este ejemplo, T es un tipo genérico que puede representar cualquier tipo de datos. La función identidad toma un argumento de tipo T y devuelve el mismo tipo T.

2. Uso de un Generic Type:
   Cuando llamas a una función o clase genérica, debes proporcionar el tipo de datos específico que deseas usar. Por ejemplo:

```typescript
let resultado = identidad<string>("Hola mundo");
```

Aquí, hemos llamado a la función identidad y especificado que T debe ser de tipo string. El tipo de resultado será string.

Generic Types con Arrays:
También puedes utilizar generics con arrays para crear arrays de cualquier tipo. Por ejemplo:

```typescript
function imprimirElementos<T>(arr: T[]): void {
  arr.forEach((elemento) => console.log(elemento));
}

imprimirElementos<number>([1, 2, 3, 4, 5]); // Imprime los números del 1 al 5
imprimirElementos<string>(["a", "b", "c"]); // Imprime las letras "a", "b" y "c"
```

Aquí, T[] especifica que arr es un array de elementos de tipo T.

Generic Classes:
También puedes crear clases genéricas en TypeScript. Por ejemplo:

```typescript
class Caja<T> {
  contenido: T;

  constructor(valor: T) {
    this.contenido = valor;
  }

  obtenerContenido(): T {
    return this.contenido;
  }
}

let cajaDeNumeros = new Caja<number>(10);
let cajaDeTexto = new Caja<string>("Hola");
```

En este ejemplo, Caja es una clase genérica que puede contener cualquier tipo de datos. Cuando creas una instancia de Caja, especificas el tipo de datos que deseas almacenar dentro de la caja.

Los generics en TypeScript te permiten escribir código flexible y reutilizable al trabajar con tipos de datos. Puedes crear funciones, clases y tipos que funcionen con diferentes tipos de datos sin perder información sobre esos tipos. Esto hace que tu código sea más genérico, más fácil de entender y más fácil de mantener.

## Uso de generics en funciones y componentes de React.

Los generics son extremadamente útiles cuando se trata de escribir funciones y componentes de React en TypeScript, ya que te permiten crear código flexible y reutilizable que puede trabajar con diferentes tipos de datos. Aquí te muestro cómo puedes utilizar generics en funciones y componentes de React:

1. Funciones con Generics:
   Puedes escribir funciones genéricas en TypeScript que acepten diferentes tipos de datos como argumentos y/o devuelvan diferentes tipos de datos como resultado. Por ejemplo:

```typescript
function duplicar<T>(valor: T): T {
  return valor;
}

const numeroDuplicado = duplicar<number>(5); // número
const stringDuplicado = duplicar<string>("Hola"); // string
```

En este ejemplo, duplicar es una función genérica que toma un argumento de tipo T y devuelve el mismo tipo T.

2. Componentes de React con Generics:
   Puedes escribir componentes de React que acepten props genéricas, lo que te permite reutilizar el mismo componente con diferentes tipos de datos para las props. Por ejemplo:

```typescript
import React from "react";

interface Props<T> {
  valor: T;
}

function ComponenteGenerica<T>({ valor }: Props<T>) {
  return <div>{valor}</div>;
}

// Uso del componente con diferentes tipos de props
const NumeroComponente = () => <ComponenteGenerica<number> valor={5} />;
const StringComponente = () => <ComponenteGenerica<string> valor="Hola" />;
```

En este ejemplo, ComponenteGenerica es un componente de React que acepta una prop valor de tipo T. Puedes usar este componente con diferentes tipos de datos para la prop valor, como números o cadenas.

Los generics te permiten escribir código flexible y reutilizable en TypeScript, lo que es especialmente útil al trabajar con funciones y componentes de React. Al utilizar generics, puedes crear funciones y componentes que funcionen con diferentes tipos de datos sin perder información sobre esos tipos, lo que facilita la escritura de código genérico y fácil de mantener.

## Ejemplos prácticos de generics en aplicaciones React.

1. Componente de Lista Genérica:
   Imagina que tienes un componente de lista que puede mostrar una lista de elementos de diferentes tipos. Puedes usar generics para hacer que este componente sea flexible y reutilizable para cualquier tipo de datos.

```typescript
import React from "react";

interface ListaProps<T> {
  elementos: T[];
}

function Lista<T>({ elementos }: ListaProps<T>) {
  return (
    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}
    </ul>
  );
}

// Uso del componente Lista con diferentes tipos de datos
const ListaDeNumeros = () => <Lista<number> elementos={[1, 2, 3, 4, 5]} />;
const ListaDeCadenas = () => <Lista<string> elementos={["Hola", "Mundo"]} />;
```

En este ejemplo, Lista es un componente de React genérico que acepta una lista de elementos de tipo T. Puedes usar este componente con diferentes tipos de datos, como números o cadenas.

2. Hook Personalizado Genérico:
   Puedes crear hooks personalizados genéricos que acepten diferentes tipos de datos como argumentos y devuelvan diferentes tipos de datos como resultado.

```typescript
import { useState } from "react";

function useLocalStorage<T>(
  clave: string,
  valorInicial: T
): [T, (nuevoValor: T) => void] {
  const [valor, setValor] = useState<T>(() => {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : valorInicial;
  });

  const actualizarValor = (nuevoValor: T) => {
    setValor(nuevoValor);
    localStorage.setItem(clave, JSON.stringify(nuevoValor));
  };

  return [valor, actualizarValor];
}

// Uso del hook useLocalStorage con diferentes tipos de datos
const [contador, setContador] = useLocalStorage<number>("contador", 0);
const [usuario, setUsuario] = useLocalStorage<{ nombre: string; edad: number }>(
  "usuario",
  { nombre: "", edad: 0 }
);
```

En este ejemplo, useLocalStorage es un hook personalizado genérico que guarda el estado en el almacenamiento local y acepta un tipo de datos T. Puedes usar este hook con diferentes tipos de datos, como números o objetos.

Estos son solo algunos ejemplos prácticos de cómo puedes utilizar generics en aplicaciones React para crear componentes y hooks flexibles y reutilizables que funcionen con diferentes tipos de datos. Los generics te permiten escribir código más genérico y fácil de mantener, lo que facilita la construcción de aplicaciones robustas y flexibles.

## Tipado en Eventos y Refs

## Tipado en manejadores de eventos en componentes de React.

Al manejar eventos en componentes de React con TypeScript, es importante proporcionar tipos adecuados para los eventos y los manejadores de eventos para garantizar una correcta inferencia de tipos y un código más robusto. Aquí te muestro cómo puedes hacerlo:

1. Manejo de Eventos sin Argumentos:
   Para manejar eventos sin argumentos, como onClick, puedes utilizar el tipo React.MouseEventHandler. Por ejemplo:

```typescript
import React from "react";

const MiComponente: React.FC = () => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Botón clickeado");
  };

  return <button onClick={handleClick}>Clic aquí</button>;
};

export default MiComponente;
```

En este ejemplo, handleClick es un manejador de evento que no toma ningún argumento y se utiliza para el evento onClick de un botón. El tipo React.MouseEventHandler<HTMLButtonElement> indica que este manejador de eventos está asociado a un elemento de botón (HTMLButtonElement).

2. Manejo de Eventos con Argumentos:
   Para manejar eventos con argumentos, como onChange en un input, puedes proporcionar un tipo para el argumento y utilizar una función de flecha para envolver tu manejador de eventos. Por ejemplo:

```typescript
import React, { useState } from "react";

const MiComponente: React.FC = () => {
  const [valor, setValor] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };

  return <input type="text" value={valor} onChange={handleChange} />;
};

export default MiComponente;
```

En este ejemplo, handleChange es un manejador de evento que toma un argumento de tipo React.ChangeEvent<HTMLInputElement>, que representa el evento de cambio en un input de tipo texto. Esta interfaz contiene información sobre el evento, como el objetivo (target) del evento y el nuevo valor (value) del input.

Proporcionar tipos adecuados para los manejadores de eventos en componentes de React con TypeScript te ayuda a evitar errores de tipo y te brinda una mejor experiencia de desarrollo al permitir una correcta inferencia de tipos y autocompletado en tu editor de código.

## Tipado en referencias (refs) a elementos del DOM.

Cuando trabajas con referencias a elementos del DOM en React con TypeScript, es importante proporcionar tipos adecuados para las referencias para evitar errores de tipo y tener una mejor inferencia de tipos en tu código. Aquí te muestro cómo puedes hacerlo:

1. Creación de una Referencia:
   Puedes crear una referencia utilizando la función useRef de React y especificar el tipo de elemento al que se refiere la referencia. Por ejemplo:

```typescript
import React, { useRef } from "react";

const MiComponente: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Enfocar Input</button>
    </div>
  );
};

export default MiComponente;
```

En este ejemplo, inputRef es una referencia a un elemento de input de tipo HTMLInputElement. Proporcionamos este tipo al utilizar useRef<HTMLInputElement>(null), lo que garantiza que la referencia se refiere a un elemento de input de tipo HTML.

2. Uso de la Referencia:
   Puedes utilizar la referencia para acceder al elemento del DOM y realizar acciones, como enfocar el elemento. Es importante verificar que la referencia no sea nula antes de acceder a las propiedades del elemento, ya que puede ser nula inicialmente.
3. Nullish Coalescing Operator (??):
   A partir de TypeScript 3.7, puedes utilizar el operador de fusión nula (??) para acceder a las propiedades de la referencia de forma segura sin necesidad de verificar si la referencia es nula. Por ejemplo:

```typescript
import React, { useRef } from "react";

const MiComponente: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Enfocar Input</button>
    </div>
  );
};

export default MiComponente;
```

En este ejemplo, inputRef.current?.focus() enfoca el input solo si inputRef.current no es nulo.

Proporcionar tipos adecuados para las referencias a elementos del DOM en React con TypeScript te ayuda a evitar errores de tipo y a tener una mejor experiencia de desarrollo al permitir una correcta inferencia de tipos y autocompletado en tu editor de código.

## Ejemplos prácticos de tipado en eventos y refs en React.

¡Por supuesto! Aquí tienes algunos ejemplos prácticos de cómo puedes aplicar el tipado en eventos y referencias (refs) en React con TypeScript:

1. Tipado en Eventos y Referencias:
   En este ejemplo, vamos a crear un componente que maneje eventos de clic y utilice una referencia para acceder a un elemento de input y cambiar su valor cuando se hace clic en un botón.

```typescript
import React, { useRef } from "react";

const MiComponente: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "Nuevo valor";
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Cambiar Valor</button>
    </div>
  );
};

export default MiComponente;
```

En este ejemplo, hemos definido una referencia inputRef de tipo HTMLInputElement que apunta a un elemento de input. Luego, hemos definido un manejador de evento handleClick que cambia el valor del input cuando se hace clic en el botón.

2. Uso de Nullish Coalescing Operator:
   Vamos a modificar el ejemplo anterior para utilizar el operador de fusión nula (??) para acceder a las propiedades de la referencia de forma segura.

```typescript
import React, { useRef } from "react";

const MiComponente: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Enfocar Input</button>
    </div>
  );
};

export default MiComponente;
```

En este ejemplo, hemos utilizado inputRef.current?.focus() para enfocar el input solo si inputRef.current no es nulo.

Estos son solo algunos ejemplos prácticos de cómo puedes aplicar el tipado en eventos y referencias en React con TypeScript. Al proporcionar tipos adecuados para eventos y referencias, puedes mejorar la seguridad y la claridad de tu código, así como aprovechar las ventajas de la inferencia de tipos y el autocompletado en tu editor de código.
