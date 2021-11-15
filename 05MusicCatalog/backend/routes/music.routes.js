const express = require('express');

const router = express.Router();

const MusicController = require('./../controllers/music.controller');

const musicController = new MusicController;

router.get('/music', musicController.getMusic);
router.get('/music/:id', musicController.getMusicById);
router.post('/music/new', musicController.createMusic);
router.put('/music/:id', musicController.editMusic);
router.delete('/music/:id', musicController.deleteMusic);
router.get('*', musicController.ooops);

module.exports = router;