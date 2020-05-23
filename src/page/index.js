"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cargarBienvenida = void 0;
//Variables
var bienvenida = document.querySelector('#bienvenida'); //IIEF
//FUnciones

var cargarBienvenida = function cargarBienvenida() {
  var url = '../page/file/bienvenida.txt';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      bienvenida.innerHTML = "<p class=\"text-justify\">".concat(this.responseText, "</p>");
      console.log(this.responseText);
    }
  };

  bienvenida.addEventListener('load', cargarBienvenida, true);
};

exports.cargarBienvenida = cargarBienvenida;