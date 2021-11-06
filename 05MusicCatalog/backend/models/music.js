const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  musicality: { type: String, required: true },
  thumb: { type: String },
  creationDate: { type: Date, default: Date.now }
});

const MusicModel = mongoose.model('music', musicSchema);

module.exports = MusicModel;