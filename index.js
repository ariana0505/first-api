const express = require('express');
require('dotenv').config();

const userRoutes = require('./src/routes/userRoutes');
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use('/api/users', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});