document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("nombre").textContent = urlParams.get("nombre");
    document.getElementById("apellidoPaterno").textContent = urlParams.get("apellidoPaterno");
    document.getElementById("apellidoMaterno").textContent = urlParams.get("apellidoMaterno");
    document.getElementById("correo").textContent = urlParams.get("correo");
    document.getElementById("telefono").textContent = urlParams.get("telefono");
    document.getElementById("turno").textContent = urlParams.get("turno");
    document.getElementById("contrasena").textContent = urlParams.get("contrasena");
    document.getElementById("repetirContrasena").textContent = urlParams.get("repetirContrasena");
});