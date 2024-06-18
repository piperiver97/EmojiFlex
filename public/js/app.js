

function ensenaromostrar(){

    for (let cont = 1; cont < 15; cont++) {
      
      let stringid ="box"+cont;
  
  switch (cont) {
    case 1:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 2:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 3:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 4:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 5:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 6:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 7:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 8:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 9:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 10:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 11:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 12:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 13:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
      case 14:
        document.getElementById(stringid).onmouseover = function() {ocultar(cont)};
        document.getElementById(stringid).onmouseout = function() {ensenar(cont)};
      break;
    
  }
    }
  
  
  }
  
  
  function ocultar(cont){
    let stringanimal = "contanimal"+cont;
    document.getElementById(stringanimal).style.display = "none";
  
  }
  
  function ensenar(cont){
    let stringanimal = "contanimal"+cont;
    document.getElementById(stringanimal).style.display = "block";
  }
  
  ensenaromostrar();