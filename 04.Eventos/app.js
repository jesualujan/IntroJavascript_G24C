const formLogin = document.getElementById("login");
const post = document.querySelector(".post");
const postTitle = document.querySelector(".post-title");
const btnCambiarTexto = document.getElementById("cambiar-texto");
const image = document.getElementById("image");
// const cambiarTexto = document.querySelector("#cambiar-texto");

/* btnCambiarTexto.onclick = function () {
  cambiarTexto("Hola mundo desde un Evento");
}; */

/* 
addEventListener()
1. string con el nombre del evento
2. callback
3. boolean -> opcional
*/

const temporalText = postTitle.textContent;
let controlState = false;

const URL_IMAGE =
"https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

function cambiarTexto(sms) {
 /*  if (!controlState) {
    postTitle.textContent = sms;
  } else {
    postTitle.textContent = temporalText;
  } */
  // operador ternario
  postTitle.textContent = !controlState ? sms : temporalText;
  /* cambio de img en js */
  image.src = URL_IMAGE;
  controlState = !controlState;
}


/* btnCambiarTexto.addEventListener("click", function () {
  cambiarTexto("Hola mundo desde un Evento");
}); */

// funciones flecha en js
btnCambiarTexto.addEventListener("click", () =>
  cambiarTexto("Hola mundo desde un Evento")
);
