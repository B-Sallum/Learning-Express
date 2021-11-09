const API_URL = 'http://localhost:3001/music';

const list = document.getElementById('musicList');
let inputName = document.getElementById('name');
let inputAuthor = document.getElementById('author');
let inputMusicality = document.getElementById('musicality');
let inputLyric = document.getElementById('lyric');
let inputDuration = document.getElementById('duration');
let inputThumb = document.getElementById('thumb');

const getMusic = async () => {

  const response = await fetch(API_URL);

  const data = await response.json();

  musicList.innerHTML = "";

  data.reverse();

  data.map((music) => {    

    list.insertAdjacentHTML('beforeend', `
      <div class="card-out" style="background-image: url('${music.thumb}'); background-size: cover; background-position: center;">
          <div class="card-in">
          <div class="category"><h3>${music.musicality}</h3></h4>
          <div class="year"><h3>${music.duration}</h3></div>
          <div class="name"><h3>${music.name}</h3></div>
          <div class="author"><h3>${music.author}</h3></div>
          <div class="innerButtons">
            <button class="editButton" id="editGame" onclick="editMusic('${music.id}', '${music.name}', '${music.author}',' '${music.musicality}', '${music.lyric}', '${music.duration}', '${music.thumb}')">Edit</h2>
            <button class="editButton" id="deleteGame" onclick="deleteGame('${music.id}', '${music.name}')">X</h2>
          </div>
        </div>
      </div>
    `)
  });
};

const submitForm = async (event) => {

  event.preventDefault();

  const music = {
    name: inputName.value,
    author: inputAuthor.value,
    musicality: inputMusicality.value,
    lyric: inputLyric.value,
    duration: parseFloat(inputDuration.value),
    thumb: inputThumb.value
  };

  const request = new Request(

      `${API_URL}/new`,

    {
      method: 'POST',
      body: JSON.stringify(music),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  )

  const response = await fetch(request);

  inputName.value = "";
  inputAuthor.value = "";
  inputMusicality.value = "";
  inputLyric.value = "";
  inputDuration.value = "";
  inputThumb.value = "";

  getMusic();


};


getMusic();