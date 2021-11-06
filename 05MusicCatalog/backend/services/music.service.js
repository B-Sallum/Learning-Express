const MusicModel = require('./../models/music');


class musicService {

  findAll = async () => await MusicModel.find();
  
  findById = async (id) => await MusicModel.findById(id);
};

module.exports = musicService;