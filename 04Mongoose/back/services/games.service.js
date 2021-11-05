const Game = require('./../models/game');

class GamesService {
  findAll = async () => await Game.find();
}

module.exports = GamesService;