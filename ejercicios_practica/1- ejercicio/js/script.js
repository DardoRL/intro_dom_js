"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   

2)
Cambiar título utilizando javascript por otro cualquiera.

*/
const TITULOH2 = document.querySelector("#myHeader");
console.log (TITULOH2.textContent);
TITULOH2.textContent= "Este es el nuevo titulo de H2";
console.log (TITULOH2.textContent);

