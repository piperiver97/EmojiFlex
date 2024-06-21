function ensenaromostrar() {
  for (let cont = 1; cont < 15; cont++) {
      let stringid = "box" + cont;

      document.getElementById(stringid).onmouseover = function() { ocultar(cont) };
      document.getElementById(stringid).onmouseout = function() { ensenar(cont) };
  }
}

function ocultar(cont) {
  let stringanimal = "emoji" + cont;
  document.getElementById(stringanimal).style.display = "none";
}

function ensenar(cont) {
  let stringanimal = "emoji" + cont;
  document.getElementById(stringanimal).style.display = "block";
}

ensenaromostrar();
