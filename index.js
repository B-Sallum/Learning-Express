// Server API
// para inicializar npm i express
// Importar o Express
const express = require('express')
const cors = require('cors')

// Inicializar o Express no arquivo para assumir funções
const app = express()

// Middleware para utilizar JSON
app.use(express.json())

// Middleware do Cors para liberar requisições
app.use(cors())

// Definir a porta onde será executado o servidor BackEnd
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá Buuuuuuuu')
})

app.get('/new', (req, res) => {
    res.send('List')
})

app.post('/new', (req, res) => {
    const { nome, idade } = req.body
    res.send(`Welcome ${nome} idade ${idade}`)
})

// Inicializar o Servidor na porta Pré Definida
app.listen(port, () => {
    console.log(`O App está rodando em: http://localhost:${port}`)
})