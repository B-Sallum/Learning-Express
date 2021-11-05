const express = require('express');

const GamesController = require('./../controllers/games.controller')

const router = express.Router();

const gamesController = new GamesController;

router.get('/', gamesController.getGames);

module.exports = router;