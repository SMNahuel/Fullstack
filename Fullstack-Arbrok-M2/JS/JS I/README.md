# Introducción a JavaScript, variables, tipos de datos

# ¿Qué es Javascript?

JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web. Proporciona la capacidad de crear interactividad y dinamismo en los sitios web.

> [!NOTE]
> ### ¿Por qué se llama JavaScript?
> Pero a medida que evolucionaba, JavaScript se convirtió en un lenguaje completamente independiente con su propia especificación llamada [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript), y ahora no tiene ninguna relación con Java.
> 
> Cuando JavaScript fue creado, inicialmente tenía otro nombre: “LiveScript”. Pero Java era muy popular en ese momento, así que se decidió que el posicionamiento de un nuevo lenguaje como un “Hermano menor” de Java ayudaría.
> 


Hoy, JavaScript puede ejecutarse no solo en los navegadores, sino también en servidores o incluso en cualquier dispositivo que cuente con un programa especial llamado [El motor o intérprete de JavaScript](https://es.wikipedia.org/wiki/Int%C3%A9rprete_de_JavaScript).

El navegador tiene un motor embebido a veces llamado una “Máquina virtual de JavaScript”.

Diferentes motores tienen diferentes “nombres en clave”. Por ejemplo:

- [V8](https://es.wikipedia.org/wiki/Chrome_V8) – en Chrome, Opera y Edge.
- [SpiderMonkey](https://es.wikipedia.org/wiki/SpiderMonkey) – en Firefox.
- …Existen otros nombres en clave como “Chakra” para IE , “JavaScriptCore”, “Nitro” y “SquirrelFish” para Safari, etc.

> [!NOTE]
> ### ¿Como trabajan los motores?
> Los motores son complicados, pero los fundamentos son fáciles. 1. El motor (embebido si es un navegador) lee (“analiza”) el script.
> 
> 2. Luego convierte (“compila”) el script a lenguaje de máquina. 3. Por último, el código máquina se ejecuta, muy rápido. 
> 
> El motor aplica optimizaciones en cada paso del proceso. Incluso observa como el script compilado se ejecuta, analiza los datos que fluyen a través de él y aplica optimizaciones al código maquina basadas en ese conocimiento.
> 

# ¿Qué puede hacer JavaScript en el navegador?

El JavaScript moderno es un lenguaje de programación “seguro”. No proporciona acceso de bajo nivel a la memoria ni a la CPU (UCP); ya que se creó inicialmente para los navegadores, los cuales no lo requieren.

Las capacidades de JavaScript dependen en gran medida en el entorno en que se ejecuta. Por ejemplo, [Node.JS](https://es.wikipedia.org/wiki/Node.js) soporta funciones que permiten a JavaScript leer y escribir archivos arbitrariamente, realizar solicitudes de red, etc.

En el navegador JavaScript puede realizar cualquier cosa relacionada con la manipulación de una página web, interacción con el usuario y el servidor web.

Por ejemplo, en el navegador JavaScript es capaz de:

- Agregar nuevo HTML a la página, cambiar el contenido existente y modificar estilos.
- Reaccionar a las acciones del usuario, ejecutarse con los clics del ratón, movimientos del puntero y al oprimir teclas.
- Enviar solicitudes de red a servidores remotos, descargar y cargar archivos (Tecnologías llamadas [AJAX](https://es.wikipedia.org/wiki/AJAX) y [COMET](https://es.wikipedia.org/wiki/Comet)).
- Obtener y configurar cookies, hacer preguntas al visitante y mostrar mensajes.
- Recordar datos en el lado del cliente con el almacenamiento local (“local storage”).

# ¿Qué NO PUEDE hacer JavaScript en el navegador?

Las capacidades de JavaScript en el navegador están limitadas para proteger la seguridad de usuario. El objetivo es evitar que una página maliciosa acceda a información privada o dañe los datos de usuario.

Ejemplos de tales restricciones incluyen:

- JavaScript en el navegador no puede leer y escribir arbitrariamente archivos en el disco duro, copiarlos o ejecutar programas. No tiene acceso directo a funciones del Sistema operativo (OS).
    
    Los navegadores más modernos le permiten trabajar con archivos, pero el acceso es limitado y solo permitido si el usuario realiza ciertas acciones, como “arrastrar” un archivo a la ventana del navegador o seleccionarlo por medio de una etiqueta `<input`>.
    
    Existen maneras de interactuar con la cámara, micrófono y otros dispositivos, pero eso requiere el permiso explícito del usuario. Por lo tanto, una página habilitada para JavaScript no puede habilitar una cámara web para observar el entorno y enviar la información a la [NSA](https://es.wikipedia.org/wiki/Agencia_de_Seguridad_Nacional).
    
- Diferentes pestañas y ventanas generalmente no se conocen entre sí. A veces sí lo hacen: por ejemplo, cuando una ventana usa JavaScript para abrir otra. Pero incluso en este caso, JavaScript no puede acceder a la otra si provienen de diferentes sitios (de diferente dominio, protocolo o puerto).
    
    Esta restricción es conocida como “política del mismo origen” (“Same Origin Policy”). Es posible la comunicación, pero ambas páginas deben acordar el intercambio de datos y también deben contener el código especial de JavaScript que permite controlarlo. Cubriremos esto en el tutorial.
    
    De nuevo: esta limitación es para la seguridad del usuario. Una página de `http://algunsitio.com`, que el usuario haya abierto, no debe ser capaz de acceder a otra pestaña del navegador con la URL `http://gmail.com` y robar la información de esta otra página.
    
- JavaScript puede fácilmente comunicarse a través de la red con el servidor de donde la página actual proviene. Pero su capacidad para recibir información de otros sitios y dominios está bloqueada. Aunque sea posible, esto requiere un acuerdo explícito (expresado en los encabezados HTTP) desde el sitio remoto. Una vez más: esto es una limitación de seguridad.

Tales limitaciones no existen si JavaScript es usado fuera del navegador; por ejemplo, en un servidor. Los navegadores modernos también permiten complementos y extensiones que pueden solicitar permisos extendidos.

# ¿Qué hace a JavaScript único?

Existen al menos *tres* cosas geniales sobre JavaScript:

- Completa integración con HTML y CSS.
- Las cosas simples se hacen de manera simple.
- Soportado por la mayoría de los navegadores y habilitado de forma predeterminada.

JavaScript es la única tecnología de los navegadores que combina estas tres cosas.

Eso es lo que hace a JavaScript único. Por esto es la herramienta mas extendida para crear interfaces de navegador.

Dicho esto, JavaScript también permite crear servidores, aplicaciones móviles, etc.

# Lenguajes “por arriba de” JavaScript

La sintaxis de JavaScript no se adapta a las necesidades de todos. Personas diferentes querrán diferentes características.

Esto es algo obvio, porque los proyectos y requerimientos son diferentes para cada persona.

Así que recientemente han aparecido una gran cantidad de nuevos lenguajes, los cuales son *transpilados* (convertidos) a JavaScript antes de ser ejecutados en el navegador.

Las herramientas modernas hacen la conversión (Transpilación) muy rápida y transparente, permitiendo a los desarrolladores codificar en otros lenguajes y convertirlo automáticamente detrás de escena.

Ejemplos de tales lenguajes:

- [CoffeeScript](https://coffeescript.org/) Es una “sintaxis azucarada” para JavaScript. Introduce una sintaxis corta, permitiéndonos escribir un código más claro y preciso. Usualmente desarrolladores de Ruby prefieren este lenguaje.
- [TypeScript](https://www.typescriptlang.org/) se concentra en agregar “tipado estricto” (“strict data typing”) para simplificar el desarrollo y soporte de sistemas complejos. Es desarrollado por Microsoft.
- [FLow](https://flow.org/) también agrega la escritura de datos, pero de una manera diferente. Desarrollado por Facebook.
- [Dart](https://www.dartlang.org/) es un lenguaje independiente, tiene su propio motor que se ejecuta en entornos que no son de navegador (como aplicaciones móviles), pero que también se puede convertir/transpilar a JavaScript. Desarrollado por Google.
- [Brython](https://brython.info/) es un transpilador de Python a JavaScript que permite escribir aplicaciones en Python puro sin JavaScript.
- [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html) es un lenguaje moderno, seguro y conciso que puede apuntar al navegador o a Node.

Hay más. Por supuesto, incluso si nosotros usamos alguno de estos lenguajes transpilados, deberíamos conocer también JavaScript para realmente entender qué estamos haciendo.

# La etiqueta “script”

Los programas de JavaScript se pueden insertar en casi cualquier parte de un documento HTML con el uso de la etiqueta `<script>`.

Por ejemplo:

```html
<!DOCTYPE HTML>
<html>
	<body>
		<p>Antes del script...</p>  
		*<script>alert( '¡Hola, mundo!' );</script>*
		<p>...Después del script.</p>
	</body>
</html>
```

Puedes ejecutar el ejemplo haciendo clic en el botón “Play” en la esquina superior derecha del cuadro de arriba.

La etiqueta `<script>` contiene código JavaScript que se ejecuta automáticamente cuando el navegador procesa la etiqueta.

# Marcado moderno

La etiqueta `<script>` tiene algunos atributos que rara vez se usan en la actualidad, pero aún se pueden encontrar en código antiguo:

**El atributo `type`: `<script type=…>`**

El antiguo estándar HTML, HTML4, requería que un script tuviera un `type`. Por lo general, era `type="text/javascript"`. Ya no es necesario. Además, el estándar HTML moderno cambió totalmente el significado de este atributo. Ahora, se puede utilizar para módulos de JavaScript. Pero eso es un tema avanzado, hablaremos sobre módulos en otra parte del tutorial.

**El atributo `language`: `<script language=…>`**

Este atributo estaba destinado a mostrar el lenguaje del script. Este atributo ya no tiene sentido porque JavaScript es el lenguaje predeterminado. No hay necesidad de usarlo.

**Comentarios antes y después de los scripts.**

En libros y guías muy antiguos, puedes encontrar comentarios dentro de las etiquetas `<script>`, como el siguiente:

```jsx

<script type="text/javascript"><!--
    ...
//--></script>
```

Este truco no se utiliza en JavaScript moderno. Estos comentarios ocultaban el código JavaScript de los navegadores antiguos que no sabían cómo procesar la etiqueta `<script>`. Dado que los navegadores lanzados en los últimos 15 años no tienen este problema, este tipo de comentario puede ayudarte a identificar códigos realmente antiguos.

# Scripts externos

Si tenemos un montón de código JavaScript, podemos ponerlo en un archivo separado.

Los archivos de script se adjuntan a HTML con el atributo `src`:

```jsx
<script src="/path/to/script.js"></script>
```

Aquí, `/path/to/script.js` es una ruta absoluta al archivo de script desde la raíz del sitio. También se puede proporcionar una ruta relativa desde la página actual. Por ejemplo, `src="script.js"` significaría un archivo `"script.js"` en la carpeta actual.

También podemos dar una URL completa. Por ejemplo:

```jsx
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

Para adjuntar varios scripts, usa varias etiquetas:

```jsx
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

> [!NOTE]
> ### Por favor tome nota:
> 
> Como regla general, solo los scripts más simples se colocan en el HTML. Los más complejos residen en archivos separados.
> 
> La ventaja de un archivo separado es que el navegador lo descargará y lo almacenará en [caché](https://es.wikipedia.org/wiki/Cach%C3%A9_(inform%C3%A1tica)). Otras páginas que hacen referencia al mismo script lo tomarán del caché en lugar de descargarlo, por lo que el archivo solo se descarga una vez.
> 
> Eso reduce el tráfico y hace que las páginas sean más rápidas.
> 
> [!WARNING]
> 
>  ### Si se establece `src`, el contenido del script se ignora.
> 
> Una sola etiqueta `<script>` no puede tener el atributo `src` y código dentro.
> 
> Esto no funcionará:
> 
> ```jsx
> <script *src*="file.js">
> 	alert(1); // el contenido se ignora porque se estableció src
> </script>
> ```
> 
> Debemos elegir un `<script src="…">` externo o un `<script>` normal con código.
> 
> El ejemplo anterior se puede dividir en dos scripts para que funcione:
> 
> ```jsx
> <script src="file.js"></script>
> <script>
> 	alert(1);
> </script>
> ```

# **El modo moderno, "use strict"**

Durante mucho tiempo, JavaScript evolucionó sin problemas de compatibilidad. Se añadían nuevas características al lenguaje sin que la funcionalidad existente cambiase.

Esto tenía el beneficio de nunca romper código existente, pero lo malo era que cualquier error o decisión incorrecta tomada por los creadores de JavaScript se quedaba para siempre en el lenguaje.

Esto fue así hasta 2009, cuando ECMAScript 5 (ES5) apareció. Esta versión añadió nuevas características al lenguaje y modificó algunas de las ya existentes. Para mantener el código antiguo funcionando, la mayor parte de las modificaciones están desactivadas por defecto. Tienes que activarlas explícitamente usando una directiva especial: `"use strict"`.

# “use strict”

La directiva se asemeja a un string: `"use strict"`. Cuando se sitúa al principio de un script, el script entero funciona de la manera “moderna”.

Por ejemplo:

```jsx
"use strict";
// este código funciona de la manera moderna...
```

Aprenderemos funciones (una manera de agrupar comandos) en breve, pero adelantemos que `"use strict"` se puede poner al inicio de una función. De esta manera, se activa el modo estricto únicamente en esa función. Pero normalmente se utiliza para el script entero.

> [!WARNING]
> ### Asegúrate de que “use strict” está al inicio
> 
> Por favor, asegúrate de que `"use strict"` está al principio de tus scripts. Si no, el modo estricto podría no estar activado.
> 
> El modo estricto no está activado aquí:
> 
> ```jsx
> alert("algo de código");
> // la directiva "use strict" de abajo es ignorada, tiene que estar al principio
> "use strict";
> // el modo estricto no está activado
> ```
> 
> Únicamente pueden aparecer comentarios por encima de `"use strict"`.

> [!WARNING]
> ### No hay manera de cancelar `use strict`
> 
> No hay ninguna directiva del tipo `"no use strict"` que haga al motor volver al comportamiento anterior.
> 
> Una vez entramos en modo estricto, no hay vuelta atrás.
> 


# Consola del navegador

Cuando utilices la [consola del navegador](https://es.javascript.info/devtools) para ejecutar código, ten en cuenta que no utiliza `use strict` por defecto.

En ocasiones, donde `use strict` cause diferencia, obtendrás resultados incorrectos.

Entonces, ¿como utilizar `use strict` en la consola?

Primero puedes intentar pulsando Shift+Enter para ingresar múltiples líneas y poner `use strict` al principio, como aquí:

```jsx
'use strict'; <Shift+Enter para una nueva línea>
//  ...tu código
<Intro para ejecutar>
```

Esto funciona para la mayoría de los navegadores, específicamente Firefox y Chrome.

Si esto no funciona, como en los viejos navegadores, hay una fea pero confiable manera de asegurar `use strict`. Ponlo dentro de esta especie de envoltura:

```jsx
(function() {
	'use strict';
	// ...tu código...
})()
```

# ¿Deberíamos utilizar “use strict”?

La pregunta podría parecer obvia, pero no lo es.

Uno podría recomendar que se comiencen los script con `"use strict"`… ¿Pero sabes lo que es interesante?

El JavaScript moderno admite “clases” y “módulos”, estructuras de lenguaje avanzadas (que seguramente llegaremos a ver), que automáticamente habilitan `use strict`. Entonces no necesitamos agregar la directiva `"use strict"` si las usamos.

**Entonces, por ahora `"use strict";` es un invitado bienvenido al tope de tus scripts. Luego, cuando tu código sea todo clases y módulos, puedes omitirlo.**

A partir de ahora tenemos que saber acerca de `use strict` en general.

En los siguientes capítulos, a medida que aprendamos características del lenguaje, veremos las diferencias entre el modo estricto y el antiguo. Afortunadamente no hay muchas y realmente hacen nuestra vida mejor.

Todos los ejemplos en este tutorial asumen modo estricto salvo que (muy raramente) se especifique lo contrario.

# **Variables

La mayoría del tiempo, una aplicación de JavaScript necesita trabajar con información. Aquí hay 2 ejemplos:

1. Una tienda en línea – La información puede incluir los bienes a la venta y un “carrito de compras”.
2. Una aplicación de chat – La información puede incluir los usuarios, mensajes, y mucho más.

Utilizamos las variables para almacenar esta información.

# Una variable

Una [variable](https://es.wikipedia.org/wiki/Variable_(programaci%C3%B3n)) es un “almacén con un nombre” para guardar datos. Podemos usar variables para almacenar golosinas, visitantes, y otros datos.

Para generar una variable en JavaScript, se usa la palabra clave `let`.

La siguiente declaración genera (en otras palabras: *declara* o *define*) una variable con el nombre “message”:

```jsx
let message;
```

Ahora podemos introducir datos en ella al utilizar el operador de asignación `=`:

```jsx
let message;

*message = 'Hola'; // almacenar la cadena 'Hola' en la variable llamada message*
```

La cadena ahora está almacenada en el área de la memoria asociada con la variable. La podemos acceder utilizando el nombre de la variable:

```jsx
let message;
message = 'Hola!';

*alert(message); // muestra el contenido de la variable*
```

Para ser concisos, podemos combinar la declaración de la variable y su asignación en una sola línea:

```jsx
let message = 'Hola!'; // define la variable y asigna un valor
alert(message); // Hola!
```

También podemos declarar variables múltiples en una sola línea:

```jsx
let user = 'John', age = 25, message = 'Hola';
```

Esto puede parecer más corto, pero no lo recomendamos. Por el bien de la legibilidad, por favor utiliza una línea por variable.

La versión de líneas múltiples es un poco más larga, pero se lee más fácil:

```jsx
let user = 'John';let age = 25;let message = 'Hola';
```

Algunas personas también definen variables múltiples en estilo multilínea:

```jsx
let user = 'John',  age = 25,  message = 'Hola';
```

…Incluso en este estilo “coma primero”:

```jsx
let user = 'John', age = 25, message = 'Hola';
```

Técnicamente, todas estas variantes hacen lo mismo. Así que, es cuestión de gusto personal y preferencia estética.

> [!NOTE]
>  ### `var` en vez de `let`
> 
> En scripts más viejos, a veces se encuentra otra palabra clave: `var` en lugar de `let`:
> 
> ```jsx
> *var* mensaje = 'Hola';
> ```
> 
> La palabra clave `var` es *casi* lo mismo que `let`. También hace la declaración de una variable, aunque de un modo ligeramente distinto, y más antiguo.
> 
> Existen sutiles diferencias entre `let` y `var`, pero no nos interesan en este momento. Cubriremos el tema a detalle en el capítulo [La vieja "var"](https://es.javascript.info/var).
> 


# Una analogía de la vida real

Podemos comprender fácilmente el concepto de una “variable” si nos la imaginamos como una “caja” con una etiqueta de nombre único pegada en ella.

Por ejemplo, podemos imaginar la variable `message` como una caja etiquetada `"message"` con el valor `"Hola!"` adentro:

Podemos introducir cualquier valor a la caja.

También la podemos cambiar cuantas veces queramos:

```jsx
let message;

message = 'Hola!';

message = 'Mundo!'; // valor alterado
alert(message);
```

Cuando el valor ha sido alterado, los datos antiguos serán removidos de la variable:

También podemos declarar dos variables y copiar datos de una a la otra.

```jsx
let hello = 'Hola mundo!';
let message;*// copia 'Hola mundo' de hello a message
message = hello;*// Ahora, ambas variables contienen los mismos datos
alert(hello); // Hola mundo!
alert(message); // Hola mundo!
```

> [!WARNING]
> ### Declarar dos veces lanza un error
> 
> Una variable debe ser declarada solamente una vez.
> 
> Una declaración repetida de la misma variable es un error:
> 
> ```jsx
> let message = "This";// 'let' repetidos lleva a un error
> let message = "That"; // SyntaxError: 'message' ya fue declarado
> ```
> 

Debemos declarar una variable una sola vez y desde entonces referirnos a ella sin `let`.

> [!NOTE]
> ### Lenguajes funcionales
> 
> Es interesante notar la existencia de la [programación funcional](https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional). Los lenguajes funcionales “puros”, como [Haskell](https://es.wikipedia.org/wiki/Haskell), prohíben cambiar el valor de las variables.
> 
> En tales lenguajes, una vez que la variable ha sido almacenada “en la caja”, permanece allí por siempre. Si necesitamos almacenar algo más, el lenguaje nos obliga a crear una nueva caja (generar una nueva variable). No podemos reusar la antigua.
> 
> Aunque a primera vista puede parecer un poco extraño, estos lenguajes son muy capaces de desarrollo serio. Más aún: existen áreas, como la computación en paralelo, en las cuales esta limitación otorga ciertas ventajas.
> 


# Nombramiento de variables

Existen dos limitaciones de nombre de variables en JavaScript:

1. El nombre únicamente puede incluir letras, dígitos, o los símbolos `$` y `_`.
2. El primer carácter no puede ser un dígito.

Ejemplos de nombres válidos:

```jsx
let userName;
let test123;
```

Cuando el nombre contiene varias palabras, se suele usar el estilo [camelCase](https://es.wikipedia.org/wiki/Camel_case) (capitalización en camello), donde las palabras van pegadas una detrás de otra, con cada inicial en mayúscula: `miNombreMuyLargo`.

Es interesante notar que el símbolo del dólar `'$'` y el guion bajo `'_'` también se utilizan en nombres. Son símbolos comunes, tal como las letras, sin ningún significado especial.

Los siguientes nombres son válidos:

```jsx
let $ = 1; // Declara una variable con el nombre "$"
let _ = 2; // y ahora una variable con el nombre "_"

alert($ + _); // 3
```

Ejemplos de nombres incorrectos:

```jsx
let 1a; // no puede iniciar con un dígito
let my-name; // los guiones '-' no son permitidos en nombres
```

> [!NOTE]
>  ### La Capitalización es Importante
> Dos variables con nombres `manzana` y `MANZANA` son variables distintas.
> 


> [!NOTE]
> ### Las letras que no son del alfabeto inglés están permitidas, pero no se recomiendan
> 
> Es posible utilizar letras de cualquier alfabeto, incluyendo letras del cirílico, logogramas chinos, etc.:
> 
> ```jsx
> let имя = '...';
> let 我 = '...';
> ```

> Técnicamente, no existe ningún error aquí. Tales nombres están permitidos, pero existe una tradición internacional de utilizar inglés en el nombramiento de variables. Incluso si estamos escribiendo un script pequeño, este puede tener una larga vida por delante. Puede ser necesario que gente de otros países deba leerlo en algún momento.
> 

> [!WARNING]
> ### Nombres reservados
> 
> Hay una [lista de palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), las cuales no pueden ser utilizadas como nombre de variable porque el lenguaje en sí las utiliza.
> 
> Por ejemplo: `let`, `class`, `return`, y `function` están reservadas.
> 
> El siguiente código nos da un error de sintaxis:
> 
> ```jsx
> let let = 5; // no se puede le nombrar "let" a una variable  ¡Error!
> let return = 5; // tampoco se le puede nombrar "return", ¡Error!
> ```

> [!WARNING]
> ### Una asignación sin utilizar `use strict`
> 
> Normalmente, debemos definir una variable antes de utilizarla. Pero, en los viejos tiempos, era técnicamente posible crear una variable simplemente asignando un valor sin utilizar ‘let’. Esto aún funciona si no ponemos ‘use strict’ en nuestros scripts para mantener la compatibilidad con scripts antiguos.
> 
> ```jsx
> // nota: no se utiliza "use strict" en este ejemplo
> 
> num = 5; // se crea la variable "num" si no existe antes
> alert(num); // 5
> ```
> 
> Esto es una mala práctica que causaría errores en ‘strict mode’:
> 
> ```jsx
> "use strict";
> *num = 5; // error: num no está definida*
> ```

# Constantes

Para declarar una variable constante (inmutable) use `const` en vez de `let`:

```jsx
const myBirthday = '18.04.1982';
```

Las variables declaradas utilizando `const` se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:

```jsx
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!
```

Cuando un programador está seguro de que una variable nunca cambiará, puede declarar la variable con `const` para garantizar y comunicar claramente este hecho a todos.

# Constantes mayúsculas

Existe una práctica utilizada ampliamente de utilizar constantes como aliases de valores difíciles-de-recordar y que se conocen previo a la ejecución.

Tales constantes se nombran utilizando letras mayúsculas y guiones bajos.

Por ejemplo, creemos constantes para los colores en el formato “web” (hexadecimal):

```jsx
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

Ventajas:

- `COLOR_ORANGE` es mucho más fácil de recordar que `"#FF7F00"`.
- Es mucho más fácil escribir mal `"#FF7F00"` que `COLOR_ORANGE`.
- Al leer el código, `COLOR_ORANGE` tiene mucho más significado que `#FF7F00`.

¿Cuándo se deben utilizar letras mayúsculas para una constante, y cuando se debe nombrarla de manera normal? Dejémoslo claro.

Ser una “constante” solo significa que el valor de la variable nunca cambia. Pero hay constantes que son conocidas previo a la ejecución (como el valor hexadecimal del color rojo) y hay constantes que son *calculadas* en el tiempo de ejecución, pero no cambian después de su asignación inicial.

Por ejemplo:

```jsx
const pageLoadTime = /* el tiempo que tardó la página web para cargar */;
```

El valor de `pageLoadTime` no se conoce antes de cargar la página, así que la nombramos normalmente. No obstante, es una constante porque no cambia después de su asignación inicial.

En otras palabras, las constantes con nombres en mayúscula son utilizadas solamente como alias para valores invariables y preestablecidos (“hard-coded”).

# Nombrar cosas correctamente

Estando en el tema de las variables, existe una cosa de mucha importancia.

Una variable debe tener un nombre claro, de significado evidente, que describa el dato que almacena.

Nombrar variables es una de las habilidades más importantes y complejas en la programación. Un vistazo rápido a el nombre de las variables nos revela cuál código fue escrito por un principiante o por un desarrollador experimentado.

En un proyecto real, la mayor parte de el tiempo se pasa modificando y extendiendo una base de código en vez de empezar a escribir algo desde cero. Cuando regresamos a algún código después de hacer algo distinto por un rato, es mucho más fácil encontrar información que está bien etiquetada. O, en otras palabras, cuando las variables tienen nombres adecuados.

Por favor pasa tiempo pensando en el nombre adecuado para una variable antes de declararla. Hacer esto te da un retorno muy sustancial.

Algunas reglas buenas para seguir:

- Use términos legibles para humanos como `userName` p `shoppingCart`.
- Evite abreviaciones o nombres cortos `a`, `b`, `c`, al menos que en serio sepa lo que está haciendo.
- Cree nombres que describen al máximo lo que son y sean concisos. Ejemplos que no son adecuados son `data` y `value`. Estos nombres no nos dicen nada. Estos solo está bien usarlos en el contexto de un código que deje excepcionalmente obvio cuál valor o cuales datos está referenciando la variable.
- Acuerda en tu propia mente y con tu equipo cuáles términos se utilizarán. Si a un visitante se le llamara “user”, debemos llamar las variables relacionadas `currentUser` o `newUser` en vez de `currentVisitor` o `newManInTown`.

¿Suena simple? De hecho lo es, pero no es tan fácil crear nombres de variables descriptivos y concisos a la hora de practicar. Inténtelo.

> [!NOTE]
> ### ¿Reusar o crear?
> 
> Una última nota. Existen programadores haraganes que, en vez de declarar una variable nueva, tienden a reusar las existentes.
> 
> El resultado de esto es que sus variables son como cajas en las cuales la gente introduce cosas distintas sin cambiar sus etiquetas. ¿Que existe dentro de la caja? ¿Quién sabe? Necesitamos acercarnos y revisar.
> 
> Dichos programadores se ahorran un poco durante la declaración de la variable, pero pierden diez veces más a la hora de depuración.
> 
> Una variable extra es algo bueno, no algo malvado.
> 
> Los minificadores de JavaScript moderno, y los navegadores optimizan el código suficientemente bien para no generar cuestiones de rendimiento. Utilizar diferentes variables para distintos valores incluso puede ayudar a optimizar su código
> 

# Resumen

- JavaScript fue inicialmente creado como un lenguaje solamente para el navegador, pero ahora es usado también en muchos otros entornos.
- Hoy en día, JavaScript tiene una posición única como el lenguaje más extendido y adoptado de navegador, con una integración completa con HTML y CSS.
- Existen muchos lenguajes que se convierten o transpilan a JavaScript y aportan ciertas características. Es recomendable echarles un vistazo, al menos brevemente, después de dominar JavaScript.
- Podemos usar una etiqueta `<script>` para agregar código JavaScript a una página.
- Los atributos `type` y `language` no son necesarios.
- Un script en un archivo externo se puede insertar con `<script src="path/to/script.js"> </script>`.

Hay mucho más que aprender sobre los scripts del navegador y su interacción con la página web. Pero tengamos en cuenta que esta parte del tutorial está dedicada al lenguaje JavaScript, por lo que no debemos distraernos con implementaciones específicas del navegador. Usaremos el navegador como una forma de ejecutar JavaScript, lo cual es muy conveniente para la lectura en línea, pero es solo una de muchas.

Podemos declarar variables para almacenar datos al utilizar las palabra clave `var`, `let`, o `const`.

- `let` – es la forma moderna de declaración de una variable.
- `var` – es la declaración de variable de vieja escuela. Normalmente no lo utilizamos en absoluto. Cubriremos sus sutiles diferencias con `let` en el capítulo [La vieja "var"](https://es.javascript.info/var), por si lo necesitaras.
- `const` – es como `let`, pero el valor de la variable no puede ser alterado.

Las variables deben ser nombradas de tal manera que entendamos fácilmente lo que está en su interior.
