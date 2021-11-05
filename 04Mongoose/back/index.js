const express = require('express');
const cors = require('cors');

const Conn = require('./conn/conn');

const gamesRouter = require('./routes/games.routes');

const app = express();
app.use(express.json());
app.use(cors());

Conn();


app.use('/', gamesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});