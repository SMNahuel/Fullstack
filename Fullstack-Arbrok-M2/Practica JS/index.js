/* Para el porcentaje de la propina */
let porcentaje = 0;

function getValueAccount() {
  document.getElementById("totalAccount").value;
}

function changeSelectBotton(id) {
  const elem = document.getElementsByClassName("button_select");
  if (elem.item(0)) {
    elem.item(0).className = "calculator_tip_button";
  }
  document.getElementById(id).className = "button_select";
  porcentaje = id;
  calculatingTip();
}

function calculatingTip() {
  /* Obtenemos el total de la cuenta */
  let total = document.getElementById("totalAccount").value;

  /*El total de personas  */
  let person = document.getElementById("totalPerson").value;

  let tip = (total * porcentaje) / 100;
  let totalTipForPerson = tip / person;
  let totalForPerson = tip + total / person;

  document.getElementById("totalTipForPerson").innerHTML = totalTipForPerson;
  document.getElementById("totalForPerson").innerHTML = totalForPerson;
}

function resetCalculator(){
    location.reload()
}