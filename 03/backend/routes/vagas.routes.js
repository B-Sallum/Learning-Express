const express = require('express');

// Inicializar as rotas do Express
const router = express.Router();



router.get('/', (req, res) => {
    res.send('Opa')
})

module.exports = router;