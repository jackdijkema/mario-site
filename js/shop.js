var audio = new Audio("music.mp3");
let isPlaying = false;

function play() {
    if (isPlaying != 1) {
        audio.play();
        isPlaying = true;
    } else { 
        audio.pause();
        isPlaying = false;
    }
}