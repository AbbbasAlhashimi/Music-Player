//playSong Function
function playSong()
{
    //Adding the Play Class
    musicContainer.classList.add('play');
    //Remove the Play Class
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    //Changing the status of the Button from [Play] => [Pause]
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    //Use the Audio API to play the Song
    audio.play();
}

//pauseSong Function
function pauseSong()
{
    //Remove the Play Class
    musicContainer.classList.remove('play');
    //Add the Play Class
    playBtn.querySelector('i.fas').classList.add('fa-play');
    //Changing the status of the Button from [Pause] => [Play]
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    //Use the Audio API to play the Song
    audio.pause();
}

//Previous Song
function prevSong()
{
    songIndex--;

    if(songIndex <0)
    {
        songIndex = songs.length -1;
    }
    //load the Song
    loadSong(songs[songIndex]);
    //Play the Song
    playSong();
}

//Next Song
function nextSong()
{
    songIndex++;

    // The index begins with 0 but the length begins with 1.
    //When SongIndex value equals songs.length => then the array has been totally read.
    if(songIndex > songs.length -1)
    {
        //When the Array of song entirely played, read from the beginning of the array.
        songIndex = 0;
    }
    //load the Song
    loadSong(songs[songIndex]);
    //Play the Song
    playSong();
}


//Change Song
prevBtn.addEventListener('click',prevSong); //Previous Song
nextBtn.addEventListener('click',nextSong); //Next Song

