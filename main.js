song1 = "01. A Hard Day's Night.mp3";
song2 = "Oggy and the Cockroaches.mp3";

function preload()
{
    loadSound(song1, song2);
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
} 

function draw()
{
    image(video, 0, 0, 600, 500);
}