// Usuarios válidos
const usuarios = [
    { usuario: "ana", contrasena: "1234" },
    { usuario: "luis", contrasena: "abcd" },
    { usuario: "marta", contrasena: "qwerty" }
];

// Elementos del DOM
const formulario = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // TODO: validar usuario y contraseña contra el array `usuarios`
    console.log("Formulario enviado");
});
