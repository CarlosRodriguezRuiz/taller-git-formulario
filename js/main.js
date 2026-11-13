// Usuarios válidos
const usuarios = [
    { usuario: "Julian", contrasena: "Admin123" },
    { usuario: "Carlos", contrasena: "Admin123" },
    { usuario: "Alejandro", contrasena: "Admin123" }
];

// Elementos del DOM
const formulario = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuarioIngresado = inputUsuario.value.trim();
    const contrasenaIngresada = inputContrasena.value;

    const usuarioValido = usuarios.find(
        (u) => u.usuario === usuarioIngresado && u.contrasena === contrasenaIngresada
    );

    if (usuarioValido) {
        mensaje.textContent = "Logueado con éxito";
    } else {
        mensaje.textContent = "Error de logueo";
    }
});