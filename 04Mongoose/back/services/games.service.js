const Game = require('./../models/game');

class gamesService {
  findAll = async () => await Game.find();

  findById = async () => await Game.findById(id);
}

module.exports = gamesService;