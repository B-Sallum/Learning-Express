// Projeto vagas
// Importação das libs externas (Express e Cors)
const express = require('express');
const cors = require('cors');

const vagasRoute = require('./routes/vagas.routes')

// Inicialização do Express
const app = express();

// Habilitando JSON do Express
app.use(express.json());

// Habilitando o Middleware CORS
app.use(cors());

app.use('/vagas', vagasRoute)


const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
});