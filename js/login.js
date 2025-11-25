document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('login-form');
  const mensaje = document.getElementById('mensaje');
  const btnRegistro = document.getElementById('btn-registro');
  const formRegistro = document.getElementById('registro-form');
  const mensajeRegistro = document.getElementById('mensaje-registro');

  // Mostrar/ocultar formulario de registro
  btnRegistro.addEventListener('click', () => {
    formRegistro.style.display = formRegistro.style.display === 'none' ? 'block' : 'none';
  });

  // LOGIN
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const encontrado = usuarios.find(u => u.usuario === usuario && u.clave === clave);

    if (encontrado) {
      localStorage.setItem('usuarioActivo', usuario);
      mensaje.textContent = "Inicio de sesión exitoso.";
      mensaje.style.color = "green";
      window.location.href = "./index.html";
    } else {
      mensaje.textContent = "Credenciales incorrectas.";
      mensaje.style.color = "red";
    }
  });

  // REGISTRO
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nuevoUsuario = document.getElementById('nuevo-usuario').value;
    const nuevoClave = document.getElementById('nuevo-clave').value;
    const nuevoEmail = document.getElementById('nuevo-email').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(u => u.usuario === nuevoUsuario)) {
      mensajeRegistro.textContent = "Ese usuario ya existe.";
      mensajeRegistro.style.color = "red";
      return;
    }

    usuarios.push({ usuario: nuevoUsuario, clave: nuevoClave, email: nuevoEmail });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mensajeRegistro.textContent = "Usuario registrado exitosamente.";
    mensajeRegistro.style.color = "green";

    formRegistro.reset();
    formRegistro.style.display = 'none';
  });
});