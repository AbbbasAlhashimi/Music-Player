//Passing Values to the DOM
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//Array of Song Titles
const songs =['One-Day','Over-the-Rainbow','Stolen-Dance'];
//Keep track of Songs
let songIndex = 2;

//Load the initial song details into the DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song)
{
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}


//Add Event Listener
playBtn.addEventListener('click', () =>
{
    //Check if the [Play] button is clicked and/or the status of [music-container] is Play
    const isPlaying = musicContainer.classList.contains('play'); //True - False
    
    if(isPlaying)
    {
        pauseSong();
    }

    else
    {
        playSong();
    }
})

