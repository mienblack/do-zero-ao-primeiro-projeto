
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

let img = new Image ();
img.src = "./images/carue.png";

img.onload = drawCarue;

function drawCarue () {
    context.drawImage (this, 50, 50, this.naturalWidth, this.naturalHeight)
}
