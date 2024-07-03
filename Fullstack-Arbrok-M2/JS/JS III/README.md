# Trabajo con arrays en JavaScript

### **Arrays**

Los objetos te permiten almacenar colecciones de datos a través de nombres. Eso está bien.

Pero a menudo necesitamos una *colección ordenada*, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente. Por ejemplo, necesitamos almacenar una lista de algo: usuarios, bienes, elementos HTML, etc.

No es conveniente usar objetos aquí, porque no proveen métodos para manejar el orden de los elementos. No podemos insertar una nueva propiedad “entre” los existentes. Los objetos no están hechos para eso.

Existe una estructura llamada `Array` (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas.

LIFO (Last In First Out)

FIFO (First In First Out)

# Declaración

Hay dos sintaxis para crear un array vacío:

```jsx
let arr = new Array();
let arr = [1, "", function(){},{}, ["dsa"]];
```

Casi siempre se usa la segunda. Podemos suministrar elementos iniciales entre los corchetes:

```jsx
let fruits = ["Apple", "Orange", "Plum"];
```

Los elementos del array están numerados comenzando desde cero.

Podemos obtener un elemento por su número entre corchetes:

```jsx
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

Podemos reemplazar un elemento:

```jsx
fruits[2] = 'Pear'; // ahora ["Apple", "Orange", "Pear"]
```

…o agregar uno nuevo al array:

```jsx
fruits[3] = 'Lemon'; // ahora ["Apple", "Orange", "Pear", "Lemon"]
```

La cuenta total de elementos en el array es su longitud `length`:

```jsx
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3
```

También podemos usar `alert` para mostrar el array completo.

```jsx
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits ); // Apple,Orange,Plum
```

Un `array puede almacenar elementos de cualquier tipo.`

Por ejemplo:

```jsx
// mezcla de valores.
let arr = [ 'Apple', { name: 'John' }, true, function() { 
		alert('hello'); 
	} 
];
// obtener el objeto del índice 1 y mostrar su nombre
alert( arr[1].name ); // John
// obtener la función del índice 3 y ejecutarla
arr[3](); // hello
```

**Coma residual**

Un array, al igual que un objeto, puede tener una coma final:

```jsx
let fruits = ["Apple","Orange","Plum"*,*];
```

La “coma final” hace más simple insertar y remover items, porque todas la líneas se vuelven similares.

# Obtener los últimos elementos con “at”

**Una adición reciente**

Esta es una adición reciente al lenguaje. Los navegadores antiguos pueden necesitar polyfills.

Digamos que queremos el último elemento de un array.

Algunos lenguajes de programación permiten el uso de índices negativos para este propósito, como `fruits[-1]`.

Aunque en JavaScript esto no funcionará. El resultado será `undefined`, porque el índice de los corchetes es tratado literalmente.

Podemos calcular explícitamente el último índice y luego acceder al elemento: `fruits[fruits.length - 1]`.

```jsx
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum
```

Un poco engorroso, ¿no es cierto? Necesitamos escribir el nombre de la variable dos veces.

Afortunadamente, hay una sintaxis más corta: `fruits.at(-1)`:

```jsx
let fruits = ["Apple", "Orange", "Plum"];// es lo mismo que 
fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum
```

En otras palabras, `arr.at(i)`:

- es exactamente lo mismo que `arr[i]`, si `i >= 0`.
- para valores negativos de `i`, salta hacia atrás desde el final del array.

# Métodos pop/push, shift/unshift

Una [cola](https://es.wikipedia.org/wiki/Cola_(inform%C3%A1tica)) es uno de los usos más comunes de un array. En ciencias de la computación, significa una colección ordenada de elementos que soportan dos operaciones:

- `push` inserta un elemento al final.
- `shift` obtiene el elemento del principio, avanzando la cola, y así el segundo elemento se vuelve primero.

Los arrays soportan ambas operaciones.

En la práctica los necesitamos muy a menudo. Por ejemplo, una cola de mensajes que necesitamos mostrar en pantalla.

Hay otro caso de uso para los arrays – la estructura de datos llamada [pila](https://es.wikipedia.org/wiki/Pila_(inform%C3%A1tica)).

Ella soporta dos operaciones:

- `push` agrega un elemento al final.
- `pop` toma un elemento desde el final.

Entonces los elementos nuevos son agregados o tomados siempre desde el “final”.

Una pila es usualmente mostrada como un mazo de cartas, donde las nuevas cartas son agregadas al tope o tomadas desde el tope:

Para las pilas, la última introducida es la primera en ser recibida, en inglés esto es llamado principio LIFO (Last-In-First-Out, última en entrar primera en salir). Para las colas, tenemos FIFO (First-In-First-Out primera en entrar, primera en salir).

Los arrays en JavaScript pueden trabajar como colas o pilas. Ellos permiten agregar/quitar elementos al/del principio o al/del final.

En ciencias de la computación, la estructura de datos que permite esto se denomina cola de doble extremo o [bicola](https://es.wikipedia.org/wiki/Bicola).

**Métodos que trabajan sobre el final del array:**

**`pop`**Extrae el último elemento del array y lo devuelve:

```jsx

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // quita "Pear" y lo muestra en un alert
alert( fruits ); // Apple, Orange
```

Tanto `fruits.pop()` como `fruits.at(-1)` devuelven el último elemento del array, pero `fruits.pop()` también modifica el array eliminando tal elemento.**`push`**Agrega el elemento al final del array:

```jsx

let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear
```

El llamado a `fruits.push(...)` es igual a `fruits[fruits.length] = ...`.

**Métodos que trabajan con el principio del array:**

**`shift`**Extrae el primer elemento del array y lo devuelve:

```jsx

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // quita Apple y lo muestra en un alert
alert( fruits ); // Orange, Pear 

```

**unshift** Agrega el elemento al principio del array:

```jsx

let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear
```

Los métodos `push` y `unshift` pueden agregar múltiples elementos de una vez:

```jsx
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
```

# Interiores

Un array es una clase especial de objeto. Los corchetes usados para acceder a una propiedad `arr[0]` vienen de la sintaxis de objeto. Son esencialmente lo mismo que `obj[key]`, donde `arr` es el objeto mientras los números son usados como claves.

Ellos extienden los objetos proveyendo métodos especiales para trabajar con colecciones ordenadas de datos y también la propiedad `length`. Pero en el corazón es aún un objeto.

Recuerde, solo hay ocho tipos de datos básicos en JavaScript. Array es un objeto y, por tanto, se comporta como un objeto.

Por ejemplo, es copiado por referencia:

```jsx
let fruits = ["Banana"]
let arr = fruits; // copiado por referencia (dos variables referencian al mismo array)
alert( arr === fruits ); // true

arr.push("Pear"); // modifica el array por referencia
alert( fruits ); // Banana, Pear - ahora con 2 items
```

…Pero lo que hace a los array realmente especiales es su representación interna. El motor trata de almacenarlos en áreas de memoria contigua, uno tras otro, justo como muestra la ilustración en este capítulo. Hay otras optimizaciones también para hacer que los arrays trabajen verdaderamente rápido.

Pero todo esto se puede malograr si dejamos de trabajarlos como arrays de colecciones ordenadas y comenzamos a usarlos como si fueran objetos comunes.

Por ejemplo, técnicamente podemos hacer esto:

```jsx
let fruits = []; // crea un array

fruits[99999] = 5; // asigna una propiedad con un índice mucho mayor que su longitud

fruits.age = 25; // crea una propiedad con un nombre arbitrario
```

Esto es posible porque los arrays son objetos en su base. Podemos agregar cualquier propiedad en ellos.

Pero el motor verá que estamos tratándolo como un objeto común. Las optimizaciones específicas no son aptas para tales casos y serán desechadas, y sus beneficios desaparecerán.

Las formas de malograr un array:

- Agregar una propiedad no numérica como `arr.test = 5`.
- Generar agujeros como: agregar `arr[0]` y luego `arr[1000]` (y nada entre ellos).
- Llenar el array en orden inverso, como `arr[1000]`, `arr[999]` y así.

Piensa en los arrays como estructuras especiales para trabajar con *datos ordenados*. Ellos proveen métodos especiales para ello. Los arrays están cuidadosamente afinados dentro de los motores JavaScript para funcionar con datos ordenados contiguos, por favor úsalos de esa manera. Y si necesitas claves arbitrarias, hay altas chances de que en realidad necesites objetos comunes `{}`.

# Performance

Los métodos `push/pop` son rápidos, mientras que `shift/unshift` son lentos.

¿Por qué es más rápido trabajar con el final del array que con el principio? Veamos qué pasa durante la ejecución:

```jsx
fruits.shift(); // toma 1 elemento del principio
```

No es suficiente tomar y eliminar el elemento con el índice `0`. Los demás elementos necesitan ser renumerados también.

La operación `shift` debe hacer 3 cosas:

1. Remover el elemento con índice `0`.
2. Mover todos lo elementos hacia la izquierda y renumerarlos: desde el índice `1` a `0`, de `2` a `1` y así sucesivamente.
3. Actualizar la longitud: la propiedad `length`.

**Cuanto más elementos haya en el array, más tiempo tomará moverlos, más operaciones en memoria.**

Algo similar ocurre con `unshift`: para agregar un elemento al principio del array, necesitamos primero mover todos los elementos hacia la derecha, incrementando sus índices.

¿Y qué pasa con `push/pop`? Ellos no necesitan mover nada. Para extraer un elemento del final, el método `pop` limpia el índice y acorta `length`.

Las acciones para la operación `pop`:

```jsx
fruits.pop(); // toma 1 elemento del final
```

**El método `pop` no necesita mover nada, porque los demás elementos mantienen sus índices. Es por ello que es muy rápido.**

Algo similar ocurre con el método `push`.

# Bucles

Una de las formas más viejas de iterar los items de un array es el bucle `for` sobre sus índices:

```jsx
let arr = ["Apple", "Orange", "Pear"];
*for (let i = 0; i < arr.length; i++) {*
	alert( arr[i] );
}
```

Pero para los arrays también hay otra forma de bucle,`for..of`:

```jsx
let fruits = ["Apple", "Orange", "Plum"];
// itera sobre los elementos del array
for (let fruit of fruits) {
	alert( fruit );
}
```

`for..of` no da acceso al número del elemento en curso, solamente a su valor, pero en la mayoría de los casos eso es suficiente. Y es más corto.

Técnicamente, y porque los arrays son objetos, es también posible usar `for..in`:

```jsx
let arr = ["Apple", "Orange", "Pear"];
*for (let key in arr) {*
	alert( arr[key] ); 
// Apple, Orange, Pear
}
```

Pero es una mala idea. Existen problemas potenciales con esto:

1. El bucle `for..in` itera sobre *todas las propiedades*, no solo las numéricas.
    
    Existen objetos “simil-array” en el navegador y otros ambientes que *parecen arrays*. Esto es, tienen `length` y propiedades indexadas, pero pueden también tener propiedades no numéricas y métodos que usualmente no necesitemos. Y el bucle `for..in` los listará. Entonces si necesitamos trabajar con objetos simil-array, estas propiedades “extras” pueden volverse un problema.
    
2. El bucle `for..in` está optimizado para objetos genéricos, no para arrays, y es de 10 a 100 veces más lento. Por supuesto es aún muy rápido. Una optimización puede que solo sea importante en cuellos de botella, pero necesitamos ser concientes de la diferencia.

En general, no deberíamos usar `for..in` en arrays.

# Acerca de “length”

La propiedad `length` automáticamente se actualiza cuando se modifica el array. Para ser precisos, no es la cuenta de valores del array sino el mayor índice más uno.

Por ejemplo, un elemento simple con un índice grande da una longitud grande:

```jsx
let fruits = [];
fruits[123] = "Apple";alert( fruits.length ); // 124
```

Nota que usualmente no usamos arrays de este modo.

Otra cosa interesante acerca de la propiedad `length` es que se puede sobrescribir.

Si la incrementamos manualmente, nada interesante ocurre. Pero si la decrementamos, el array se trunca. El proceso es irreversible, aquí el ejemplo:

```jsx
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncamos a 2 elementosalert( arr ); // [1, 2]

arr.length = 5; // reponemos la longitud lengthalert( arr[3] ); // undefined: el valor no se recupera
```

Entonces la forma más simple de limpiar un array es: `arr.length = 0;`.

# new Array()

Hay una sintaxis más para crear un array:

```jsx
let arr = *new Array*("Apple", "Pear", "etc");
```

Es raramente usada porque con corchetes `[]` es más corto. También hay una característica peculiar con ella.

Si `new Array` es llamado con un único argumento numérico, se crea un array *sin items, pero con la longitud “length” dada*.

Veamos cómo uno puede dispararse en el pie:

```jsx
let arr = new Array(2); // ¿Creará un array de [2]?
alert( arr[0] ); // undefined! sin elementos.
alert( arr.length ); // longitud 2
```

Para evitar sorpresas solemos usar corchetes, salvo que sepamos lo que estamos haciendo.

# Arrays multidimensionales

Los arrays pueden tener items que a su vez sean arrays. Podemos usarlos como arrays multidimensionales, por ejemplo para almacenar matrices:

```jsx
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
alert( matrix[1][1] ); // 5, el elemento central
```

# toString

Los arrays tienen su propia implementación del método `toString` que devuelve un lista de elementos separados por coma.

Por ejemplo:

```jsx
let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
```

Probemos esto también:

```jsx
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
```

Los arrays no tienen `Symbol.toPrimitive` ni un `valueOf` viable, ellos implementan la conversión `toString` solamente, así `[]` se vuelve una cadena vacía, `[1]` se vuelve `"1"` y `[1,2]` se vuelve `"1,2"`.

Cuando el operador binario más `"+"` suma algo a una cadena, lo convierte a cadena también, entonces lo siguiente se ve así:

```jsx
alert( "" + 1 ); // "1"alert( "1" + 1 ); // "11"alert( "1,2" + 1 ); // "1,21"
```

# No compares arrays con ==

Las arrays en JavaScript, a diferencia de otros lenguajes de programación, no deben ser comparadas con el operador `==`.

Este operador no tiene un tratamiento especial para arrays, trabaja con ellas como con cualquier objeto.

Recordemos las reglas:

- Dos objetos son iguales `==` solo si hacen referencia al mismo objeto.
- Si uno de los argumentos de `==` es un objeto y el otro es un primitivo, entonces el objeto se convierte en primitivo, como se explica en el capítulo [Conversión de objeto a valor primitivo](https://es.javascript.info/object-toprimitive).
- …Con la excepción de `null` y `undefined` que son iguales `==` entre sí y nada más.

La comparación estricta `===` es aún más simple, ya que no convierte tipos.

Entonces, si comparamos arrays con `==`, nunca son iguales, a no ser que comparemos dos variables que hacen referencia exactamente a la misma array.

Por ejemplo:

```jsx
alert( [] == [] ); // falsoalert( [0] == [0] ); // falso
```

Estas arrays son técnicamente objetos diferentes. Así que no son iguales. El operador `==` no hace comparaciones de elemento a elemento.

Comparaciones con primitivos también pueden dar resultados aparentemente extraños:

```jsx
alert( 0 == [] ); // verdaderoalert('0' == [] ); // falso
```

Aquí, en ambos casos, comparamos un primitivo con un objeto array. Entonces la array `[]` se convierte a primitivo para el propósito de comparar y se convierte en una string vacía `''`.

Luego el proceso de comparación continúa con los primitivos, como se describe en el capítulo [Conversiones de Tipos](https://es.javascript.info/type-conversions):

```jsx
// después de que [] se convierta en ''
alert( 0 == '' ); // verdadero, ya que '' se convierte en el número 0
alert('0' == '' ); // falso, sin conversión de tipos, strings diferentes
```

Entonces, ¿cómo comparamos arrays?

Simple: no utilices el operador `==`. En lugar, compáralas elemento a elemento en un bucle o utilizando métodos de iteración explicados en el siguiente capítulo.

# Resumen

Los arrays son una clase especial de objeto, adecuados para almacenar y manejar items de datos ordenados.

La declaración:

```jsx
// corchetes (lo usual)
let arr = [item1, item2...];
// new Array (excepcionalmente raro)
let arr = new Array(item1, item2...);
```

El llamado a `new Array(number)` crea un array con la longitud dada, pero sin elementos.

- La propiedad `length` es la longitud del array o, para ser preciso, el último índice numérico más uno. Se autoajusta al usar los métodos de array.
- Si acortamos `length` manualmente, el array se trunca.

Obtener los elementos:

- Podemos obtener un elemento por su índice, como `arr[0]`
- También podemos usar el método `at(i)`, que permite índices negativos. Para valores negativos de `i`, cuenta hacia atrás desde el final del array. Cuando `i >= 0`, funciona igual que `arr[i]`.

Podemos usar un array como una pila “deque” o “bicola” con las siguientes operaciones:

- `push(...items)` agrega `items` al final.
- `pop()` remueve el elemento del final y lo devuelve.
- `shift()` remueve el elemento del principio y lo devuelve.
- `unshift(...items)` agrega `items` al principio.

Para iterar sobre los elementos de un array:

- `for (let i=0; i<arr.length; i++)` – lo más rápido, compatible con viejos navegadores.
- `for (let item of arr)` – la sintaxis moderna para items solamente.
- `for (let i in arr)` – nunca lo uses.

Para comparar arrays, no uses el operador `==` (como tampoco `>`, `<` y otros), ya que no tienen un tratamiento especial para arrays. Lo manejan como cualquier objeto y no es lo que normalmente queremos.

En su lugar puedes utilizar el bucle `for..of` para comparar arrays elemento a elemento.

# Tareas

**¿El array es copiado?**

importancia: 3

¿Qué va a mostrar este código?

```jsx
let fruits = ["Apples", "Pear", "Orange"];
// introduce un valor nuevo dentro de una copia
let shoppingCart = fruits;
shoppingCart.push("Banana");// ¿Qué hay en "fruits"?
alert( fruits.length ); // ¿?
```

solución

**[Operaciones en arrays.](https://es.javascript.info/array#operaciones-en-arrays)**

importancia: 5

Tratemos 5 operaciones de array.

1. Crear un array `styles` con los items “Jazz” y “Blues”.
2. Agregar “Rock-n-Roll” al final.
3. Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
4. Quitar el primer valor del array y mostrarlo.
5. Anteponer `Rap` y `Reggae` al array.

El array durante el proceso:

```jsx
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
```

solución

**LLamados en un contexto de array**

importancia: 5

¿Cuál es el resultado y por qué?

```jsx
let arr = ["a", "b"];

arr.push(function() {alert( this );});

arr[2](); // ?
```

solución

**Suma de números ingresados**

importancia: 4

Escribe una función `sumInput()` que:

- Pida al usuario valores usando `prompt` y los almacene en el array.
- Termine de pedirlos cuando el usuario ingrese un valor no numérico, una cadena vacía, o presione “Escape”.
- Calcule y devuelva la suma de los items del array.

P.D. Un cero `0` es un número válido, por favor no detengas los ingresos con el cero.

[Ejecutar el demo](https://es.javascript.info/array#)

solución

**Subarray máximo**

importancia: 2

La entrada es un array de números, por ejemplo `arr = [1, -2, 3, 4, -9, 6]`.

La tarea es encontrar, dentro de ’arr’, el subarray de elementos contiguos que tenga la suma máxima.

Escribe la función `getMaxSubSum(arr)` que devuelva el resultado de tal suma.

Por ejemplo:

```jsx
getMaxSubSum([-1, *2, 3*, -9]) == 5 (la suma de items resaltados)
getMaxSubSum([*2, -1, 2, 3*, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, *11*]) == 11
getMaxSubSum([-2, -1, *1, 2*]) == 3
getMaxSubSum([*100*, -9, 2, -3, 5]) == 100
getMaxSubSum([*1, 2, 3*]) == 6 (toma todo)
```

Si todos los elementos son negativos, no toma ninguno (el subarray queda vacío) y la suma es cero:

```jsx
getMaxSubSum([-1, -2, -3]) = 0
```

Trata de pensar en una solución rápida: [O(n2)](https://es.wikipedia.org/wiki/Notaci%C3%B3n_de_Landau), o incluso O(n) si puedes.

[Abrir en entorno controlado con pruebas.](https://plnkr.co/edit/mylhROp8Vce1qLSE?p=preview)

### **Métodos de arrays**

Los arrays (también llamados arreglos o matrices) cuentan con muchos métodos. Para hacer las cosas más sencillas, en este capítulo se encuentran divididos en dos partes.

# Agregar/remover ítems

Ya conocemos algunos métodos que agregan o extraen elementos del inicio o final de un array:

- `arr.push(...items)` – agrega ítems al final,
- `arr.pop()` – extrae un ítem del final,
- `arr.shift()` – extrae un ítem del inicio,
- `arr.unshift(...items)` – agrega ítems al principio.

Veamos algunos métodos más.

### splice

¿Cómo podemos borrar un elemento de un array?

Los arrays son objetos, por lo que podemos intentar con `delete`:

```jsx
let arr = ["voy", "a", "casa"];delete arr[1]; // remueve "a"alert( arr[1] ); // undefined// ahora arr = ["voy",  , "casa"];alert( arr.length ); // 3
```

El elemento fue borrado, pero el array todavía tiene 3 elementos; podemos ver que `arr.length == 3`.

Es natural, porque `delete obj.key` borra el valor de `key`, pero es todo lo que hace. Esto está bien en los objetos, pero en general lo que buscamos en los arrays es que el resto de los elementos se desplace y se ocupe el lugar libre. Lo que esperamos es un array más corto.

Por lo tanto, necesitamos utilizar métodos especiales.

El método [arr.splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice) funciona como una navaja suiza para arrays. Puede hacer todo: insertar, remover y remplazar elementos.

La sintaxis es:

```jsx
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

Esto modifica `arr` comenzando en el índice `start`: remueve la cantidad `deleteCount` de elementos y luego inserta `elem1, ..., elemN` en su lugar. Lo que devuelve es un array de los elementos removidos.

Este método es más fácil de entender con ejemplos.

Empecemos removiendo elementos:

```jsx
let arr = ["Yo", "estudio", "JavaScript"];*arr.splice(1, 1); 
// desde el índice 1, remover 1 elemento*alert( arr ); 
// ["Yo", "JavaScript"]
```

¿Fácil, no? Empezando desde el índice `1` removió `1` elemento.

En el próximo ejemplo removemos 3 elementos y los reemplazamos con otros 2:

```jsx
let arr = [*"Yo", "estudio", "JavaScript",* "ahora", "mismo"];
// remueve los primeros 3 elementos y los reemplaza con otros
arr.splice(0, 3, "a", "bailar");alert( arr ) 
// ahora [*"a", "bailar"*, "ahora", "mismo"]
```

Aquí podemos ver que `splice` devuelve un array con los elementos removidos:

```jsx
let arr = [*"Yo", "estudio",* "JavaScript", "ahora", "mismo"];
// remueve los 2 primeros elementoslet removed = arr.splice(0, 2);
alert( removed ); 
// "Yo", "estudio" <-- array de los elementos removidos
```

El método `splice` también es capaz de insertar elementos sin remover ningún otro. Para eso necesitamos establecer `deleteCount` en `0`:

```jsx
let arr = ["Yo", "estudio", "JavaScript"];
// desde el index 2
// remover 0
// después insertar "el", "complejo" y "language"
arr.splice(2, 0,"el", "complejo", "language");
alert( arr ); 
// "Yo", "estudio","el", "complejo", "language", "JavaScript"
```

**Los índices negativos están permitidos**

En este y en otros métodos de arrays, los índices negativos están permitidos. Estos índices indican la posición comenzando desde el final del array, de la siguiente manera:

```jsx
let arr = [1, 2, 5];
// desde el index -1 (un lugar desde el final)
// remover 0 elementos,
// después insertar 3 y 4
arr.splice(-1, 0, 3, 4);alert( arr ); 
// 1,2,3,4,5
```

### slice

El método [arr.slice](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice) es mucho más simple que `arr.splice`.

La sintaxis es:

```jsx
arr.slice([principio], [final])
```

Devuelve un nuevo array copiando en el mismo todos los elementos desde `principio` hasta `final` (sin incluir `final`). `principio` y `final` pueden ser negativos, en cuyo caso se asume la posición desde el final del array.

Es similar al método para strings `str.slice`, pero en lugar de substrings genera subarrays.

Por ejemplo:

```jsx
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); 
// e,s (copia desde 1 hasta 3)
alert( arr.slice(-2) ); 
// s,t (copia desde -2 hasta el final)
```

También podemos invocarlo sin argumentos: `arr.slice()` crea una copia de `arr`. Se utiliza a menudo para obtener una copia que se puede transformar sin afectar el array original.

### concat

El método [arr.concat](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/concat) crea un nuevo array que incluye los valores de otros arrays y elementos adicionales.

La sintaxis es:

```jsx
arr.concat(arg1, arg2...)
```

Este acepta cualquier número de argumentos, tanto arrays como valores.

El resultado es un nuevo array conteniendo los elementos de `arr`, después `arg1`, `arg2` etc.

Si un argumento `argN` es un array, entonces todos sus elementos son copiados. De otro modo el argumento en sí es copiado.

Por ejemplo:

```jsx
let arr = [1, 2];
// crea un array a partir de: arr y [3,4]
alert( arr.concat([3, 4]) ); 
// 1,2,3,4
// crea un array a partir de: arr y [3,4] y [5,6]
alert( arr.concat([3, 4], [5, 6]) ); 
// 1,2,3,4,5,6
// crea un array a partir de: arr y [3,4], luego agrega los valores 5 y 6
alert( arr.concat([3, 4], 5, 6) ); 
// 1,2,3,4,5,6
```

Normalmente, solo copia elementos desde arrays. Otros objetos, incluso si parecen arrays, son agregados como un todo:

```jsx
let arr = [1, 2];let arrayLike = {0: "something",
length: 1};alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```

…Pero si un objeto similar a un array tiene la propiedad especial `Symbol.isConcatSpreadable`, entonces `concat` lo trata como un array y en lugar de añadirlo como un todo, solo añade sus elementos.

```jsx
let arr = [1, 2];
let arrayLike = {0: "something",1: "else",  *[Symbol.isConcatSpreadable]: true,*
length: 2};
alert( arr.concat(arrayLike) ); 
// 1,2,something,else
```

# Iteración: forEach

El método [arr.forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach) permite ejecutar una función a cada elemento del array.

La sintaxis:

```jsx
arr.forEach(function(item, index, array) {
// ... hacer algo con el elemento
});
```

Por ejemplo, el siguiente código muestra cada elemento del array:

```jsx
// para cada elemento ejecuta 
alert["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

Y este caso más detallado da la posición del elemento en el array:

```jsx
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
	alert(`${item} is at index ${index} in ${array}`);
});
```

El resultado de la función (si lo hay) se descarta y se ignora.

# Buscar dentro de un array

Ahora vamos a ver métodos que buscan elementos dentro de un array.

### indexOf/lastIndexOf e includes

Los métodos [arr.indexOf](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf) y [arr.includes](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes) tienen una sintaxis similar y hacen básicamente lo mismo que sus contrapartes de strings, pero operan sobre elementos en lugar de caracteres:

- `arr.indexOf(item, from)` – busca `item` comenzando desde el index `from`, y devuelve el index donde fue encontrado, de otro modo devuelve `1`.
- `arr.includes(item, from)` – busca `item` comenzando desde el índice `from`, devuelve `true` en caso de ser encontrado.

Usualmente estos métodos se usan con un solo argumento: el `item` a buscar. De manera predeterminada, la búsqueda es desde el principio.

Por ejemplo:

```jsx
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true
```

Tener en cuenta que el método usa la comparación estricta (`===`). Por lo tanto, si buscamos `false`, encontrará exactamente `false` y no cero.

Si queremos comprobar si un elemento existe en el array, pero no necesitamos saber su ubicación exacta, es preferible usar `arr.includes`

El método [arr.lastIndexOf](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) es lo mismo que `indexOf`, pero busca de derecha a izquierda.

```jsx
let fruits = ['Apple', 'Orange', 'Apple']
alert( fruits.indexOf('Apple') ); // 0 (primera "Apple")
alert( fruits.lastIndexOf('Apple') ); // 2 (última "Apple")
```

**El método `includes` maneja `NaN` correctamente**

Una característica menor pero notable de `includes` es que, a diferencia de `indexOf`, maneja correctamente `NaN`:

```jsx
const arr = [NaN];
alert( arr.indexOf(NaN) ); 
// -1 (debería ser 0, pero la igualdad === no funciona para NaN)
alert( arr.includes(NaN) );// true (correcto)
```

Esto es porque `includes` fue agregado mucho después y usa un algoritmo interno de comparación actualizado.

### find y findIndex/findLastIndex

Imaginemos que tenemos un array de objetos. ¿Cómo podríamos encontrar un objeto con una condición específica?

Para este tipo de casos es útil el método [arr.find(fn)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find)

La sintaxis es:

```jsx
let result = arr.find(function(item, index, array) {
// si true es devuelto aquí, find devuelve el ítem y la iteración se detiene
// para el caso en que sea false, devuelve undefined
});
```

La función es llamada para cada elemento del array, uno después del otro:

- `item` es el elemento.
- `index` es su índice.
- `array` es el array mismo.

Si devuelve `true`, la búsqueda se detiene y el `item` es devuelto. Si no encuentra nada, entonces devuelve `undefined`.

Por ejemplo, si tenemos un array de usuarios, cada uno con los campos `id` y `name`. Encontremos el elemento con `id == 1`:

```jsx
let users = [{id: 1, name: "Celina"},{id: 2, name: "David"},{id: 3, name: "Federico"}];
let user = users.find(item => item.id == 1);
alert(user.name); // Celina
```

En la vida real los arrays de objetos son bastante comunes por lo que el método `find` resulta muy útil.

Ten en cuenta que en el ejemplo anterior le pasamos a `find` la función `item => item.id == 1` con un argumento. Esto es lo más común, otros argumentos son raramente usados en esta función.

El método [arr.findIndex](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex) tiene la misma sintaxis, pero devuelve el índice donde el elemento fue encontrado en lugar del elemento en sí. Devuelve `-1` cuando no lo encuentra.

El método [arr.findLastIndex](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) es como `findIndex`, pero busca de derecha a izquierda, similar a `lastIndexOf`.

Un ejemplo:

```jsx
let users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"},
	{id: 3, name: "Mary"},
	{id: 4, name: "John"}
];
// Encontrar el índice del primer John
alert(users.findIndex(user => user.name == 'John')); 
// 0
// Encontrar el índice del último John
alert(users.findLastIndex(user => user.name == 'John')); 
// 3
```

### filter

El método `find` busca un único elemento (el primero) que haga a la función devolver `true`.

Si existieran varios elementos que cumplen la condición, podemos usar [arr.filter(fn)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter).

La sintaxis es similar a `find`, pero `filter` devuelve un array con todos los elementos encontrados:

```jsx
let results = arr.filter(function(item, index, array) {
	// si devuelve true, el elemento es ingresado al array y la iteración continua
	// si nada es encontrado, devuelve un array vacío
});
```

Por ejemplo:

```jsx
let users = [
	{id: 1, name: "Celina"},
	{id: 2, name: "David"},
	{id: 3, name: "Federico"}
];

// devuelve un array con los dos primeros usuarioslet 
someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); 
// 2
```

# Transformar un array

Pasamos ahora a los métodos que transforman y reordenan un array.

### map

El método [arr.map](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) es uno de los métodos más comunes y ampliamente usados.

Este método llama a la función para cada elemento del array y devuelve un array con los resultados.

La sintaxis es:

```jsx
let result = arr.map(function(item, index, array) {
	// devuelve el nuevo valor en lugar de item
});
```

Por ejemplo, acá transformamos cada elemento en el valor de su respectivo largo (length):

```jsx
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

### sort(fn)

Cuando usamos [arr.sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort), este ordena el propio array cambiando el orden de los elementos.

También devuelve un nuevo array ordenado, pero este usualmente se descarta ya que `arr` en sí mismo es modificado.

Por ejemplo:

```jsx
let arr = [ 1, 2, 15 ];// el método reordena el contenido de arr
arr.sort();
alert( arr );  // *1, 15, 2*
```

¿Notas algo extraño en los valores de salida?

Los elementos fueron reordenados a `1, 15, 2`. Pero ¿por qué pasa esto?

**Los elementos son ordenados como strings (cadenas de caracteres) por defecto**

Todos los elementos son literalmente convertidos a string para ser comparados. En el caso de strings se aplica el orden lexicográfico, por lo que efectivamente `"2" > "15"`.

Para usar nuestro propio criterio de reordenamiento, necesitamos proporcionar una función como argumento de `arr.sort()`.

La función debe comparar dos valores arbitrarios, y devolver:

```jsx
function compare(a, b) {
	if (a > b) 
		return 1; 
// si el primer valor es mayor que el segundoif (a == b) return 0; 
// si ambos valores son iguales
	if (a < b) 
		return -1; 
// si el primer valor es menor que el segundo
}
```

Por ejemplo, para ordenar como números:

```jsx
function compareNumeric(a, b) {
	if (a > b) 
		return 1;
	if (a == b) 
		return 0;
	if (a < b) 
		return -1;
}
let arr = [ 1, 2, 15 ];
*arr.sort(compareNumeric);*
alert(arr);  // *1, 2, 15*
```

Ahora sí funciona como esperábamos.

Detengámonos un momento y pensemos qué es lo que está pasando. El array `arr` puede ser un array de cualquier cosa, ¿no? Puede contener números, strings, objetos o lo que sea. Podemos decir que tenemos un conjunto de *ciertos items*. Para ordenarlos, necesitamos una *función de ordenamiento* que sepa cómo comparar los elementos. El orden por defecto es hacerlo como strings.

El método `arr.sort(fn)` implementa un algoritmo genérico de orden. No necesitamos preocuparnos de cómo funciona internamente (la mayoría de las veces es una forma optimizada del algoritmo [quicksort](https://es.wikipedia.org/wiki/Quicksort) o [Timsort](https://en.wikipedia.org/wiki/Timsort)). Este método va a recorrer el array, comparar sus elementos usando la función dada y, finalmente, reordenarlos. Todo los que necesitamos hacer es proveer la `fn` que realiza la comparación.

Por cierto, si queremos saber qué elementos son comparados, nada nos impide ejecutar alert() en ellos:

```jsx
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
	alert( a + " <> " + b );
	return a - b;
});
```

El algoritmo puede comparar un elemento con muchos otros en el proceso, pero trata de hacer la menor cantidad de comparaciones posible.

**Una función de comparación puede devolver cualquier número**

En realidad, una función de comparación solo es requerida para devolver un número positivo para “mayor” y uno negativo para “menor”.

Esto nos permite escribir una función más corta:

```jsx
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { 
	return a - b; 
});
alert(arr);  // *1, 2, 15*
```

**Mejor, con funciones de flecha**

¿Recuerdas las [arrow functions](https://es.javascript.info/arrow-functions-basics)? Podemos usarlas en este caso para un ordenamiento más prolijo:

```jsx
arr.sort( (a, b) => a - b );
```

Esto funciona exactamente igual que la versión más larga de arriba.

**Usa `localeCompare` para strings**

¿Recuerdas el algoritmo de comparación [strings](https://es.javascript.info/string#correct-comparisons)? Este compara letras por su código por defecto.

Para muchos alfabetos, es mejor usar el método `str.localeCompare` para ordenar correctamente letras como por ejemplo `Ö`.

Por ejemplo, vamos a ordenar algunos países en alemán:

```jsx
let paises = ['Österreich', 'Andorra', 'Vietnam'];
alert( paises.sort( (a, b) => a > b ? 1 : -1) ); 
// Andorra, Vietnam, Österreich (incorrecto)
alert( paises.sort( (a, b) => a.localeCompare(b) ) ); 
// Andorra,Österreich,Vietnam (¡correcto!)
```

### reverse

El método [arr.reverse](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reverse) revierte el orden de los elementos en `arr`.

Por ejemplo:

```jsx
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1
```

También devuelve el array `arr` después de revertir el orden.

### split y join

Analicemos una situación de la vida real. Estamos programando una app de mensajería y y el usuario ingresa una lista de receptores delimitada por comas: `Celina, David, Federico`. Pero para nosotros un array sería mucho más práctico que una simple string. ¿Cómo podemos hacer para obtener un array?

El método [str.split(delim)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split) hace precisamente eso. Separa la string en elementos según el delimitante `delim` dado y los devuelve como un array.

En el ejemplo de abajo, separamos por “coma seguida de espacio”:

```jsx
let nombres = 'Bilbo, Gandalf, Nazgul';
let arr = nombres.split(', ');
for (let name of arr) {
	alert( `Un mensaje para ${name}.` ); 
// Un mensaje para Bilbo  (y los otros nombres)
}
```

El método `split` tiene un segundo argumento numérico opcional: un límite en la extensión del array. Si se provee este argumento, entonces el resto de los elementos son ignorados. Sin embargo en la práctica rara vez se utiliza:

```jsx
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf
```

**Separar en letras**

El llamado a `split(s)` con un `s` vacío separará el string en un array de letras:

```jsx
let str = "test";
alert( str.split('') ); // t,e,s,t
```

[arr.join(glue)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join) hace lo opuesto a `split`. Crea una string de `arr` elementos unidos con `glue` (pegamento) entre ellos.

Por ejemplo:

```jsx
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // une el array en una string usando ;
alert( str ); // Bilbo;Gandalf;Nazgul
```

### reduce/reduceRight

Cuando necesitamos iterar sobre un array podemos usar `forEach`, `for` o `for..of`.

Cuando necesitamos iterar y devolver un valor por cada elemento podemos usar `map`.

Los métodos [arr.reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce) y [arr.reduceRight](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduceRight) también pertenecen a ese grupo de acciones, pero son un poco más complejos. Se los utiliza para calcular un único valor a partir del array.

La sintaxis es la siguiente:

```jsx
let value = arr.reduce(function(accumulator, item, index, array) {
	// ...
}, [initial]);
```

La función es aplicada a todos los elementos del array, uno tras de otro, y va arrastrando el resultado parcial al próximo llamado.

Argumentos:

- `accumulator` – es el resultado del llamado previo de la función, equivale a `initial` la primera vez (si `initial` es dado como argumento).
- `item` – es el elemento actual del array.
- `index` – es la posición.
- `array` – es el array.

Mientras la función sea llamada, el resultado del llamado anterior se pasa al siguiente como primer argumento.

Entonces, el primer argumento es el acumulador que almacena el resultado combinado de todas las veces anteriores en que se ejecutó, y al final se convierte en el resultado de `reduce`.

¿Suena complicado?

La forma más simple de entender algo es con un ejemplo.

Acá tenemos la suma de un array en una línea:

```jsx
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
```

La función pasada a `reduce` utiliza solo 2 argumentos, esto generalmente es suficiente.

Veamos los detalles de lo que está pasando.

1. En la primera pasada, `sum` es el valor `initial` (el último argumento de `reduce`), equivale a `0`, y `current` es el primer elemento de array, equivale a `1`. Entonces el resultado de la función es `1`.
2. En la segunda pasada, `sum = 1`, agregamos el segundo elemento del array (`2`) y devolvemos el valor.
3. En la tercera pasada, `sum = 3` y le agregamos un elemento más, y así sucesivamente…

El flujo de cálculos:

O en la forma de una tabla, donde cada fila representa un llamado a una función en el próximo elemento del array:

|  | sum | current | result |
| --- | --- | --- | --- |
| primer llamado | 0 | 1 | 1 |
| segundo llamado | 1 | 2 | 3 |
| tercer llamado | 3 | 3 | 6 |
| cuarto llamado | 6 | 4 | 10 |
| quinto llamado | 10 | 5 | 15 |

Acá podemos ver claramente como el resultado del llamado anterior se convierte en el primer argumento del llamado siguiente.

También podemos omitir el valor inicial:

```jsx
let arr = [1, 2, 3, 4, 5];
// valor inicial removido (no 0)
let result = arr.reduce((sum, current) => sum + current);
alert( result ); // 15
```

El resultado es el mismo. Esto es porque en el caso de no haber valor inicial, `reduce` toma el primer elemento del array como valor inicial y comienza la iteración a partir del segundo elemento.

La tabla de cálculos es igual a la anterior menos la primer fila.

Pero este tipo de uso requiere tener extremo cuidado. Si el array está vacío, entonces el llamado a `reduce` sin valor inicial devuelve error.

Acá vemos un ejemplo:

```jsx
let arr = [];
// Error: Reduce en un array vacío sin valor inicial
// si el valor inicial existe, reduce lo devuelve en el arr vacío.
arr.reduce((sum, current) => sum + current);
```

Por lo tanto siempre se recomienda especificar un valor inicial.

El método [arr.reduceRight](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduceRight) realiza lo mismo, pero va de derecha a izquierda.

# Array.isArray

Los arrays no conforman un tipo diferente. Están basados en objetos.

Por eso `typeof` no ayuda a distinguir un objeto común de un array:

```jsx
alert(typeof {}); // objectalert(typeof []); // object (lo mismo)
```

…Pero los arrays son utilizados tan a menudo que tienen un método especial para eso: [Array.isArray(value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray). Este devuelve `true` si el `valor` es un array y `false` si no lo es.

```jsx
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
```

# La mayoría de los métodos aceptan “thisArg”

Casi todos los métodos para arrays que realizan llamados a funciones – como `find`, `filter`, `map`, con la notable excepción de `sort`– aceptan un parámetro opcional adicional `thisArg`.

Ese parámetro no está explicado en la sección anterior porque es raramente usado. Pero para ser exhaustivos necesitamos verlo.

Esta es la sintaxis completa de estos métodos:

```jsx
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);// ...// thisArg es el último argumento opcional
```

EL valor del parámetro `thisArg` se convierte en `this` para `func`.

Por ejemplo, acá usamos un método del objeto `army` como un filtro y `thisArg` da el contexto:

```jsx
let army = {
  minAge: 18,
  maxAge: 27,
	canJoin(user) {
		return user.age >= this.minAge && user.age < this.maxAge;
	}
};
let users = [{age: 16},{age: 20},{age: 23},{age: 30}];
*// encuentra usuarios para los cuales army.canJoin devuelve true
let soldiers = users.filter(army.canJoin, army);*
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

Si en el ejemplo anterior usáramos `users.filter(army.canJoin)`, entonces `army.canJoin` sería llamada como una función independiente con `this=undefined`, lo que llevaría a un error inmediato.

La llamada a `users.filter(army.canJoin, army)` puede ser reemplazada con `users.filter(user => army.canJoin(user))` que realiza lo mismo. Esta última se usa más a menudo ya que es un poco más fácil de entender.

# Resumen

Veamos el ayudamemoria de métodos para arrays:

- Para agregar/remover elementos:
    - `push(...items)` – agrega ítems al final,
    - `pop()` – extrae un ítem del final,
    - `shift()` – extrae un ítem del inicio,
    - `unshift(...items)` – agrega ítems al inicio.
    - `splice(pos, deleteCount, ...items)` – desde el índice `pos` borra `deleteCount` elementos e inserta `items`.
    - `slice(start, end)` – crea un nuevo array y copia elementos desde la posición `start` hasta `end` (no incluido) en el nuevo array.
    - `concat(...items)` – devuelve un nuevo array: copia todos los elementos del array actual y le agrega `items`. Si alguno de los `items` es un array, se toman sus elementos.
- Para buscar entre elementos:
    - `indexOf/lastIndexOf(item, pos)` – busca por `item` comenzando desde la posición `pos`, devolviendo el índice o `1` si no se encuentra.
    - `includes(value)` – devuelve `true` si el array tiene `value`, si no `false`.
    - `find/filter(func)` – filtra elementos a través de la función, devuelve el primer/todos los valores que devuelven `true`.
    - `findIndex` es similar a `find`, pero devuelve el índice en lugar del valor.
- Para iterar sobre elementos:
    - `forEach(func)` – llama la `func` para cada elemento, no devuelve nada.
- Para transformar el array:
    - `map(func)` – crea un nuevo array a partir de los resultados de llamar a la `func` para cada elemento.
    - `sort(func)` – ordena el array y lo devuelve.
    - `reverse()` – ordena el array de forma inversa y lo devuelve.
    - `split/join` – convierte una cadena en un array y viceversa.
    - `reduce/reduceRight(func, initial)` – calcula un solo valor para todo el array, llamando a la `func` para cada elemento, obteniendo un resultado parcial en cada llamada y pasándolo a la siguiente.
- Adicional:
    - `Array.isArray(value)` comprueba si `value` es un array.

Por favor tener en cuenta que `sort`, `reverse` y `splice` modifican el propio array.

Estos métodos son los más utilizados y cubren el 99% de los casos. Pero existen algunos más:

- [arr.some(fn)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some)/[arr.every(fn)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every) comprueba el array.
    
    La función `fn` es llamada para cada elemento del array de manera similar a `map`. Si alguno/todos los resultados son `true`, devuelve `true`, si no, `false`.
    
    Estos métodos se comportan con similitud a los operadores `||` y `&&`: si `fn` devuelve un valor verdadero, `arr.some()` devuelve `true` y detiene la iteración de inmediato; si `fn` devuelve un valor falso, `arr.every()` devuelve `false` y detiene la iteración también.
    

Podemos usar `every` para comparar arrays:

```jsx
function arraysEqual(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((value, index) => 
	value === arr2[index]);
}
alert( arraysEqual([1, 2], [1, 2])); // true
```

- [arr.fill(value, start, end)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/fill) – llena el array repitiendo `value` desde el índice `start` hasta `end`.
- [arr.copyWithin(target, start, end)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/copyWithin) – copia sus elementos desde la posición `start` hasta la posición `end` en *si mismo*, a la posición `target` (reescribe lo existente).
- [arr.flat(depth)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flat)/[arr.flatMap(fn)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flatMap) crea un nuevo array plano desde un array multidimensional .

Para la lista completa, ver [manual](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array).

A primera vista puede parecer que hay demasiados métodos para aprender y un tanto difíciles de recordar. Pero con el tiempo se vuelve más fácil.

Revisa el ayudamemoria para conocerlos. Después realiza las prácticas de este capítulo para ganar experiencia con los métodos para arrays.

Finalmente si en algún momento necesitas hacer algo con un array y no sabes cómo, vuelve a esta página, mira el ayudamemoria y encuentra el método correcto. Los ejemplos te ayudarán a escribirlos correctamente y pronto los recordarás automáticamente y sin esfuerzo.

# Tareas

**Transforma border-left-width en borderLeftWidth**

importancia: 5

Escribe la función `camelize(str)` que convierta palabras separadas por guión como “mi-cadena-corta” en palabras con mayúscula “miCadenaCorta”.

Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula.

Ejemplos:

```jsx
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```

P.D. Pista: usa `split` para dividir el string en un array, transfórmalo y vuelve a unirlo (`join`).

[Abrir en entorno controlado con pruebas.](https://plnkr.co/edit/tOSeFWT8NnESlxHf?p=preview)

solución

**Filtrar un rango**

importancia: 4

Escribe una función `filterRange(arr, a, b)` que obtenga un array `arr`, busque los elementos con valor mayor o igual a `a` y menor o igual a `b` y devuelva un array con los resultados.

La función no debe modificar el array. Debe devolver un nuevo array.

Por ejemplo:

```jsx
let arr = [5, 3, 8, 1];let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (valores dentro del rango)
alert( arr ); // 5,3,8,1 (array original no modificado)
```

[Abrir en entorno controlado con pruebas.](https://plnkr.co/edit/8mmTA28C327Lnlqc?p=preview)

solución

**Filtrar rango "en el lugar"**

importancia: 4

Escribe una función `filterRangeInPlace(arr, a, b)` que obtenga un array `arr` y remueva del mismo todos los valores excepto aquellos que se encuentran entre `a` y `b`. El test es: `a ≤ arr[i] ≤ b`.

La función solo debe modificar el array. No debe devolver nada.

Por ejemplo:

```jsx
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // remueve los números excepto aquellos entre 1 y 4
alert( arr ); // [3, 1]
```

[Abrir en entorno controlado con pruebas.](https://plnkr.co/edit/Fdi0vPOXd3uGQODw?p=preview)

solución

**Ordenar en orden decreciente**

importancia: 4

```jsx
let arr = [5, 2, 1, -10, 8];
// ... tu código para ordenar en orden decreciente
alert( arr ); 
// 8, 5, 2, 1, -10
```

solución

**Copia y ordena un array**

importancia: 5

Supongamos que tenemos un array `arr`. Nos gustaría tener una copia ordenada del mismo, pero mantener `arr` sin modificar.

Crea una función `copySorted(arr)` que devuelva esa copia.

```jsx
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); 
// CSS, HTML, JavaScriptalert( arr ); 
// HTML, JavaScript, CSS (sin cambios)
```

solución

**Crea una calculadora extensible**

importancia: 5

Crea una función `Calculator` que cree objetos calculadores “extensibles”.

La actividad consiste de dos partes.

1. Primero, implementar el método `calculate(str)` que toma un string como `"1 + 2"` en el formato “NUMERO operador NUMERO” (delimitado por espacios) y devuelve el resultado. Debe entender más `+` y menos ``.
    
    Ejemplo de uso:
    
    ```jsx
    let calc = new Calculator;
    alert( calc.calculate("3 + 7") ); // 10
    ```
    
2. Luego agrega el método `addMethod(name, func)` que enseñe a la calculadora una nueva operación. Toma el operador `name` y la función con dos argumentos `func(a,b)` que lo implementa.
    
    Por ejemplo, vamos a agregar la multiplicación `*`, division `/` y potencia `**`:
    
    ```jsx
    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);
    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
    ```
    
- Sin paréntesis ni expresiones complejas en esta tarea.
- Los números y el operador deben estar delimitados por exactamente un espacio.
- Puede haber manejo de errores si quisieras agregarlo.

[Abrir en entorno controlado con pruebas.](https://plnkr.co/edit/IQC3sKgMFYa8nzsB?p=preview)

solución

**Mapa a nombres**

importancia: 5

Tienes un array de objetos `user`, cada uno tiene `user.name`. Escribe el código que lo convierta en un array de nombres.

Por ejemplo:

```jsx
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = /* ... tu código */
alert( names ); // John, Pete, Mary
```

solución

**Mapa a objetos**

importancia: 5

Tienes un array de objetos `user`, cada uno tiene `name`, `surname` e `id`.

Escribe el código para crear otro array a partir de este, de objetos con `id` y `fullName`, donde `fullName` es generado a partir de `name` y `surname`.

Por ejemplo:

```jsx
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
*let usersMapped = /* ... tu código ... */*/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
alert( usersMapped[0].id ) 
// 1
alert( usersMapped[0].fullName ) // John Smith
```

Entonces, en realidad lo que necesitas es mapear un array de objetos a otro. Intenta usar `=>` en este caso. Hay un pequeño truco.

solución

**Ordena usuarios por edad**

importancia: 5

Escribe la función `sortByAge(users)` que cree un array de objetos con al propiedad `age` y los ordene según `age`.

Por ejemplo:

```jsx
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);// ahora: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
```

solución

**Barajar un array**

importancia: 3

Escribe la función `shuffle(array)` que baraje (reordene de forma aleatoria) los elementos del array.

Múltiples ejecuciones de `shuffle` puede conducir a diferentes órdenes de elementos. Por ejemplo:

```jsx
let arr = [1, 2, 3];
shuffle(arr);// 
arr = [3, 2, 1]
shuffle(arr);// 
arr = [2, 1, 3]
shuffle(arr);// 
arr = [3, 1, 2]// ...
```

Todos los reordenamientos de elementos tienen que tener la misma probabilidad. Por ejemplo, `[1,2,3]` puede ser reordenado como `[1,2,3]` o `[1,3,2]` o `[3,1,2]` etc, con igual probabilidad en cada caso.

solución

**Obtener edad promedio**

importancia: 4

Escribe la función `getAverageAge(users)` que obtenga un array de objetos con la propiedad `age` y devuelva el promedio de `age`.

La fórmula de promedio es `(age1 + age2 + ... + ageN) / N`.

Por ejemplo:

```jsx
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
```

solución

**Filtrar elementos únicos de un array**

importancia: 4

Partiendo del array `arr`.

Crea una función `unique(arr)` que devuelva un array con los elementos que se encuentran una sola vez dentro de `arr`.

Por ejemplo:

```jsx
function unique(arr) {/* tu código */}
let strings = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert( unique(strings) ); // Hare, Krishna, :-O
```

[Abrir en entorno controlado con pruebas.](https://plnkr.co/edit/LnLeQfsbMIPNQ3py?p=preview)

solución

**Crea un objeto a partir de un array**

importancia: 4

Supongamos que recibimos un array de usuarios con la forma `{id:..., name:..., age:... }`.

Crea una función `groupById(arr)` que cree un objeto, con `id` como clave (key) y los elementos del array como valores.

Por ejemplo:

```jsx
let users = [
	{
		id: 'john', 
		name: "John Smith", 
		age: 20
	},
	{
		id: 'ann', 
		name: "Ann Smith", 
		age: 24
	},
	{
		id: 'pete', 
		name: "Pete Peterson", 
		age: 31
	},
];
let usersById = groupById(users);/*
// después de llamar a la función deberíamos tener:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
```

Dicha función es realmente útil cuando trabajamos con información del servidor.

Para esta actividad asumimos que cada `id` es único. No existen dos elementos del array con el mismo `id`.

Usa el método de array `.reduce` en la solución