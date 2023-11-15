// // autenticacion.js

// const AutenticacionServicio = {
//     // Función para simular el inicio de sesión
//     iniciarSesion: function(usuario, contrasena) {
//       // Lógica de autenticación (solo un ejemplo)
//       if (usuario === 'usuario' && contrasena === 'contrasena') {
//         console.log('Inicio de sesión exitoso.');
//         return true; // Usuario autenticado
//       } else {
//         console.log('Inicio de sesión fallido. Verifica tus credenciales.');
//         return false; // Usuario no autenticado
//       }
//     }
//   };
  
//   module.exports = AutenticacionServicio;
const AutenticacionServicio = {
  iniciarSesion: function(credenciales) {
    // Lógica de autenticación (solo un ejemplo)
    if (credenciales.usuario === 'usuario' && credenciales.contrasena === 'contrasena') {
      console.log('Inicio de sesión exitoso.');
      return true; // Usuario autenticado
    } else {
      console.log('Inicio de sesión fallido. Verifica tus credenciales.');
      return false; // Usuario no autenticado
    }
  },
  
  registrarUsuario: function(nuevoUsuario) {
    // Lógica para simular el registro de un nuevo usuario
    console.log('Registro exitoso:', nuevoUsuario);
    return true; // Registro exitoso
  }
};

module.exports = AutenticacionServicio;
