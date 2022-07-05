"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/

/* Enunciado 1 */

let btn1 = document.querySelector("#boton1");
let btn2 = document.querySelector("#boton2");
let btn3 = document.querySelector("#boton3");
btn1.textContent = "Quienes Somos";
btn2.textContent = "Productos";
btn3.textContent = "Contactenos";

/* Enunciado 2 */

const classBtn = document.getElementsByClassName("btn")[0];
classBtn.classList.add("agua");


/* console.log (classBtn.classList); */



