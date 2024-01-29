var audio = document.getElementById("audio");
var time_past = document.getElementById("time_past");
var time_latf = document.getElementById("time-latf");
var fill = document.getElementById("fill");
var fill_btn = document.getElementById("fill_btn");
var played = false;

function play_and_pause(){
    
    if (played){
        audio.pause();
        document.getElementById("play_pause").src = "imge/play icon.png";
        played = false;
    }
    else{
        audio.play();
        document.getElementById("play_pause").src = "imge/pause icon.png";
        played = true;

    }
}