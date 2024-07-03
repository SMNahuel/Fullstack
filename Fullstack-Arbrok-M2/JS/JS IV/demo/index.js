function manipulandoInputs() {
  console.log(document.getElementById("usuario").value);
}

function cambiarColor() {
  /* Cambiarmos el color a un elemento  */
  document.getElementById("container").style.backgroundColor = "red";
}

function mostrarMenu() {
  document.getElementById("containerForm").style.display = "none";
  document.getElementById("containerMenu").style.display = "block";
  document.getElementById("buttonburger").style.display = "none";
  document.getElementById("buttonX").style.display = "block";
}

function mostrarForm() {
  document.getElementById("containerForm").style.display = "flex";
  document.getElementById("containerMenu").style.display = "none";
  document.getElementById("buttonburger").style.display = "block";
  document.getElementById("buttonX").style.display = "none";
}

function valorDelPrimerInput() {
  const form = document.getElementById("form");
  console.log(form.firstChild);
}

function agregarAmigos() {
  const node = document.createElement("li");
  const textnode = document.createTextNode(
    document.getElementById("amigo").value
  );
  node.appendChild(textnode);
  document.getElementById("listaAmigos").appendChild(node);
  document.getElementById("amigo").value = "";
  traerLosAmigos();
}

function traerLosAmigos() {
  const amigos = document.getElementsByTagName("li");
  console.log(amigos[0].textContent);
}

function agregarMouseHover() {
  const elem = document.getElementById("buttonAdd")
  class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Botón del mouse presionado";
          break;
        case 'mouseup':
          elem.innerHTML += "...y soltado.";
          break;
      }
    }
  }

  let menu = new Menu();

  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
}
function addAlertDOMLoaded() {
  document.addEventListener("DOMContentLoaded", function() {
    alert("DOM construido");
  });
}

function containerForm(){
  const elem = document.getElementById("containerForm");


}

function actionForm(){
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  } )
}
actionForm()