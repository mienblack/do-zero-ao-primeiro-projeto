
var video = document.getElementsByTagName("video")[0];

function retroceder () {
    video.currentTime -= 15;
} 

function diminuir_vel () {
    video.playbackRate -= 0.1;
}

function play () {
    video.play ();
}

function stop () {
    video.pause ();
}

function aumentar_vel () {
    video.playbackRate += 0.1;
}

function avancar () {
    video.currentTime += 15;
}
