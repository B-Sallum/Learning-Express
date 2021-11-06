const express = require('express');

const cors = require('cors');

const MusicRouter = require('./routes/music.routes');

const Connect = require('./connections/mongoose');

const app = express();

app.use(express.json());
app.use(cors());

Connect();

app.use('/music', MusicRouter);

const port = 3001;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});