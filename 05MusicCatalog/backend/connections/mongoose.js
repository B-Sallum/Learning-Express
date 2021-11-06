const mongoose = require('mongoose');

const Connect = () => {

  mongoose.connect('mongodb://localhost:27017/music',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }  
  ).then(() => {
    console.log('MongoDB Connected');
  }).catch((err) => {
    console.error(err);
  });
};

module.exports = Connect;