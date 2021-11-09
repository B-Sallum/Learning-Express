const express = require('express');

const router = express.Router();

const MusicController = require('./../controllers/music.controller');

const musicController = new MusicController;

router.get('/', musicController.getMusic);
router.get('/:id', musicController.getMusicById);
router.post('/new', musicController.createMusic);
router.put('/:id', musicController.editMusic);
router.delete('/:id', musicController.deleteMusic);

module.exports = router;