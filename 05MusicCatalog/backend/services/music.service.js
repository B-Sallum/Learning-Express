const MusicModel = require('./../models/music');


class musicService {

  findAll = async () => await MusicModel.find();
  
  findById = async (id) => await MusicModel.findById(id);

  create = async (newMusic) => await MusicModel.create(newMusic);

  edit = async (id, musicEdit) => await MusicModel.findByIdAndUpdate(id, musicEdit);

  delete = async (id) => await MusicModel.findByIdAndDelete(id);
};

module.exports = musicService;