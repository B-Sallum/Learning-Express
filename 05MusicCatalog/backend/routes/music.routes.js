const express = require('express');

const router = express.Router();

const MusicController = require('./../controllers/music.controller');

const musicController = new MusicController;


router.get('/', musicController.getMusic);


module.exports = router;