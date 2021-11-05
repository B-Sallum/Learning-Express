const GamesService = require('./../services/games.service');

const gamesService = new GamesService;



class gamesController {
  getGames = async (req, res) => {

    const games = await gamesService.findAll();

    res.send(games)
  }
}

module.exports = gamesController;