const MusicService = require('./../services/music.service');

const musicService = new MusicService;

class musicController {

  getMusic = async (req, res) => {

    const response = await musicService.findAll();

    res.status(200).send(response)

  };

  getMusicById = async (req, res) => {

    const response = await musicService.findById(req.params.id);

    res.status(200).send(response);

  };

  createMusic = async (req, res) => {

    const newMusic = req.body;

    await musicService.create(newMusic)
    .then(() => {
      res.status(200).send({ message: `${newMusic.name} Added`})
    })
    .catch((err) => {
      res.status(500).send({ message: `Something goes Wrong, please try again` })
    })
  };

  editMusic = async (req, res) => {

    const musicEdit = req.body;
    const musicId = req.params.id;

    await musicService.edit(musicId, musicEdit)
    .then(() => res.status(200).send({ message: `Music Edited`}))
    .catch(err => res.status(500).send({ message: `Something goes wrong`}))
  }

  deleteMusic = async (req, res) => {

    const deleteMusic = req.params.id;

    await musicService.delete(deleteMusic)
    .then(() => res.status(200).send({ message: `Music Deleted`}))
    .catch(err => res.status(500).send({ message: `Something goes wrong`}))
  }






}; // End Class

module.exports = musicController;