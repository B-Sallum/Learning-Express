const GamesService = require('./../services/games.service');

const gamesService = new GamesService;

class gamesController {
  getGames = async (req, res) => {

    const games = await gamesService.findAll();

    res.send(games)
  }

  getGamesById = async (req, res) => {
    const gameId = req.params.id;
    const game = await gamesService.findById(gameId);
    res.send(game);
  }
}

module.exports = gamesController;