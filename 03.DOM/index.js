/* 
document -> DOM -> Manipular
window -> Api Navegador
*/

const selectById = document.getElementById("main-title");
console.log(selectById);

const selectByTagName = document.getElementsByTagName("p");
console.log(selectByTagName);

const selectByClassName = document.getElementsByClassName("title");
console.log(selectByClassName);

const selectQueryByTagName = document.querySelector("p");
console.log(selectQueryByTagName);

const selectQueryByClassName = document.querySelector(".title");
console.log(selectQueryByClassName);

const selectQueryById = document.querySelector("#main-title");
console.log(selectQueryById);

const selectQueryAll = document.querySelectorAll(".title");
console.log(selectQueryAll);

/* modificar el texto de una etiqueta */
selectQueryById.textContent = "Edgar";
/* Agregar clases desde js */
selectQueryById.className = "text-orange";
/* Agregar estilos de js */
selectQueryById.style.fontSize = "24px";
selectQueryById.style.color = "green";

const container = document.querySelector("#container");

const article = document.createElement("article");
article.textContent = "Hola Mundo";

/* 
font-size -> fontSize
margin-top -> marginTop
*/

/* 
typeof -> devuelve el tipo de dato
*/
/* 
string
number
boolean
null
Symbol
undefined
Object
Array
*/
