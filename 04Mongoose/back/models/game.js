const mongoose = require('mongoose');

const gameModel = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  year: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  havePlay: { type: Boolean, required: false },
  rating: { type: Number, required: false },
})

const Game = mongoose.model('games', gameModel);

module.exports = Game;