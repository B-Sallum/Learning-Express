const MusicService = require('./../services/music.service');

const musicService = new MusicService;

class musicController {

  getMusic = async (req, res) => {

    const music = await musicService.findAll();

    res.status(200).send(music)

  };

  getMusicById = async (req, res) => {

    const musicQuery = req.params.id;

    const musicById = await musicService.findById(musicQuery);

    res.send(musicById);
  };
};

module.exports = musicController;