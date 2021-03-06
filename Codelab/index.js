// npm init em um repositório Node (ignoring)
// Server API
const express = require('express'); //Importar o Express (para inicializar npm i express)
const cors = require('cors'); //Importar o cors (para inicializar npm i cors)

const app = express(); // Inicializar o Express no arquivo para assumir funções

app.use(express.json()); // Middleware para utilizar JSON
app.use(cors()); // Middleware do Cors para liberar requisições

const port = 3000; // Definir a porta onde será executado o servidor BackEnd

const gamesList = [
    {
        gameName: "Super Mario World",
        category: "Platform",
        year: 1990
    },
    {
        gameName: "Zelda: Ocarina of Time",
        category: "Action RPG",
        year: 1998
    }
];

function pleaseCheck(newGame) {
    if (newGame.gameName == undefined ||
        newGame.category == undefined ||
        newGame.year == undefined ) {
        return 'Please Add a New Game via body JSON structure "gameName", "category" and "year"';
    } else {
        gamesList.push(newGame);
        console.log('Someone just Added a New Game!');
        return 'Thanks for Your Contribution! 💚';
    };
};

// function showList() {
//     for (i = 0; i <= gamesList.length; i++) {
//         return gamesList[i]
//     }
// }

app.get('/', (req, res) => {
    res.send(gamesList);
});

app.get('/:id', (req, res) => {
    const id = req.params.id - 1;
    res.send(gamesList[id]);
});

app.post('/new', (req, res) => {
    const { gameName, category, year } = req.body;
    let newGame = { 
        gameName: gameName,
        category: category,
        year: year
    };
    res.send(pleaseCheck(newGame));
});

// app.put('/list/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(id);
// });

// app.delete('list/:id', (req, res) => {
//   const id = req.params.id -1;
//   delete lista[id];
//   res.send(lista);
// });

// Inicializar o Servidor na porta Pré Definida
app.listen(port, () => {
  console.log(`O App está rodando em: http://localhost:${port}`);
});