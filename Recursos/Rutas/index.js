const express = require('express');
const router = express.Router();

//Rutas
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/Contacto', (req, res) => {
    res.render('Contacto.html');
});

module.exports = router;