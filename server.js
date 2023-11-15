const express = require('express');
const app = express();
const port = 3000;

// Configuración para permitir CORS (puedes ajustarlo según tus necesidades)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rutas de prueba

// Ruta para simular inicio de sesión
app.post('/api/autenticacion/iniciar-sesion', (req, res) => {
  const credenciales = req.body;
  const autenticado = AutenticacionServicio.iniciarSesion(credenciales);
  if (autenticado) {
    res.json({ mensaje: 'Inicio de sesión exitoso.' });
  } else {
    res.status(401).json({ mensaje: 'Inicio de sesión fallido. Verifica tus credenciales.' });
  }
});

// Ruta para simular el registro de un nuevo usuario
app.post('/api/autenticacion/registrar', (req, res) => {
  const nuevoUsuario = req.body.usuario req.body.contrasena;
  const registroExitoso = AutenticacionServicio.registrarUsuario(nuevoUsuario);
  if (registroExitoso) {
    res.json({ mensaje: 'Registro exitoso.' });
  } else {
    res.status(500).json({ mensaje: 'Error en el registro. Inténtalo de nuevo.' });
  }
});

// Devuelve información sobre las rutas desde tus datos o archivos
app.get('/api/transporte/rutas', (req, res) => {
  const rutas = [
    { id: 'ruta1', nombre: 'la Clarita' },
    { id: 'ruta2', nombre: 'Villa Liliana' },
    { id: 'ruta3', nombre: 'Las Colinas' }
  ];
  res.json(rutas);
});

// Ruta para obtener detalles de una ruta específica
app.get('/api/transporte/rutas/:id', (req, res) => {
  const rutaId = req.params.id;
  res.json({ mensaje: `Detalles de la ruta ${rutaId}` });
});

// Ruta para calcular tiempo de llegada a una parada en una ruta específica
app.get('/api/transporte/rutas/:id/tiempo-llegada/:parada', (req, res) => {
  const rutaId = req.params.id;
  const parada = req.params.parada;
  res.json({ mensaje: `Tiempo estimado de llegada a ${parada} en la ruta ${rutaId}: 30 minutos` });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const port = 3000;
// const AutenticacionServicio = require('./autenticacion'); // Asegúrate de importar el servicio de autenticación

// // Configuración para permitir CORS (puedes ajustarlo según tus necesidades)
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // Ruta para simular inicio de sesión
// app.post('/api/autenticacion/iniciar-sesion', (req, res) => {
//   const credenciales = req.body;
//   const autenticado = AutenticacionServicio.iniciarSesion(credenciales);
//   if (autenticado) {
//     res.json({ mensaje: 'Inicio de sesión exitoso.' });
//   } else {
//     res.status(401).json({ mensaje: 'Inicio de sesión fallido. Verifica tus credenciales.' });
//   }
// });

// // Ruta para simular el registro de un nuevo usuario
// app.post('/api/autenticacion/registrar', (req, res) => {
//   const nuevoUsuario = req.body;
//   const registroExitoso = AutenticacionServicio.registrarUsuario(nuevoUsuario);
//   if (registroExitoso) {
//     res.json({ mensaje: 'Registro exitoso.' });
//   } else {
//     res.status(500).json({ mensaje: 'Error en el registro. Inténtalo de nuevo.' });
//   }
// });

// // Rutas de prueba
// app.get('/api/transporte/rutas', (req, res) => {
//   // Devuelve información sobre las rutas desde tus datos o archivos
//   const rutas = [
//     { id: 'ruta1', nombre: 'la Clarita' },
//     { id: 'ruta2', nombre: 'Villa Liliana' },
//     { id: 'ruta3', nombre: 'Las Colinas' }
//   ];
//   res.json(rutas);
// });

// // Ruta para obtener detalles de una ruta específica
// app.get('/api/transporte/rutas/:id', (req, res) => {
//   const rutaId = req.params.id;
//   res.json({ mensaje: `Detalles de la ruta ${rutaId}` });
// });

// // Ruta para calcular tiempo de llegada a una parada en una ruta específica
// app.get('/api/transporte/rutas/:id/tiempo-llegada/:parada', (req, res) => {
//   const rutaId = req.params.id;
//   const parada = req.params.parada;
//   res.json({ mensaje: `Tiempo estimado de llegada a ${parada} en la ruta ${rutaId}: 30 minutos` });
// });

// // Inicia el servidor
// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });
