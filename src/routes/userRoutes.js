const express = require('express');

const router = express.Router();

// Ruta GET para obtener usuarios
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Juan' }, { id: 2, name: 'María' }]);
});


router.get('/nombre', (req, res) => {
    res.json([{ name: 'Juan' }, { name: 'María' }]);
  });

module.exports = router;
