let message2 = "Hola soy un mensaje";

function showMessage() {
  let message = "Hola, ¡Soy JavaScript!";
  // variable local
  alert(message);
  alert(message2);
}
showMessage();
// Hola, ¡Soy JavaScript!alert( message ); // <-- ¡Error! La variable es local para esta función

function showMessage() {
  let message = "Hola, " + userName;
  alert(message);
}
showMessage(); // Hola, Juan

let userName = "John";
function userNameshowMessage() {
  let userName = "Bob"; // declara variable local
  let message = "Hello, " + userName; // Bob
  alert(message);
}
// la función crea y utiliza su propia variable local
userNameshowMessage();
alert(userName); // John, se mantiene, la función no accedió a la variable externa

function showMessage(from, text) {
  // parámetros: from,
  textalert(from + ": " + text);
}
showMessage("Ann", "¡Hola!"); // Ann: ¡Hola! (*)*
showMessage("Ann", "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)

let from = "Ann";
function showMessage(from, text) {
  from = "*" + from + "*"; // hace que "from" se vea mejor*
  alert(from + ": " + text);
}
showMessage(from, "Hola"); // *Ann*: Hola// el valor de "from" es el mismo, la función modificó una copia local
alert(from); // Ann

function showMessage(from, text) {
  if (text === undefined) {
    text = "sin texto dado";
  }
  alert(from + ": " + text);
}

showMessage("Hola que tal", "Ramiro")
showMessage("Hola que tal")



const array = [];

function usuarioConect(user){
  array.push(user);
}

usuarioConect({
  nombre: "Nahuel",
  id: 1,
  email: "Nahueljs@gmail.com"
})

function openSellTicket(){
  array.shift();
}
/* 
                  1         2         3
*/
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
/*
-------------
| 1  |  2|  3 |   0
-------------
|  4 | 5  | 6 |   1
-------------
| 7 | 8  | 9  |   2
-------------
*/