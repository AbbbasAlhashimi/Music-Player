# Music-Player
Vanilla JS Music Player
The Project consist of a Music Container. Inside it, there are: Music Info, Track Cover image, and navigation controls.<br> The Script consist of 3 files:<br>
<ul>
  <li><b>Script.js</b> it contains the constant values initiallization will be passed to the DOM. The File also consist of a Load function and an event listener that passes a boolean value on whether the PLAY button is clicked or not.</li>
  <li><b>Controls.js</b> IT contains 4 main functions:<br>
    <i> 1) playSong</i>: Which is responsible for PLAYING the Music by adding the PLAY class item to the container class.<br>
    <i> 2) pauseSong</i>: Which is responsible for PAUSING the music by removing the PLAY class item from the container class.<br>
    <i> 3) prevSong</i>: Which is responsible for playing the PREVIOUS track by comparing the song index with songs array length.<br>
    <i> 4) nextSong</i>: Which is responsible for playing the NEXT track by comparing the song index with songs array length.<br>
      </li>
  <li><b>progress.js</b> It contains of 2 functions: 1) updateProgress and 2) setProgress, along with 3 event listeners that Display the music timeline, allows changing the track timeline by click, and jump to the next music track when the song is over.  </li>
</ul><br>
As for the Style, almost all controls are covered along with some animation effects for the buttons and the progress timeline animation.
