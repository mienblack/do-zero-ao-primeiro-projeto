
let canvas = document.getElementById("tela");

let context = canvas.getContext("2d");

context.beginPath ();

context.lineWidth = 9;
context.strokeStyle = "black";
context.moveTo (250, 50);
context.lineTo (250, 450);
context.stroke ();

context.beginPath ();

context.lineWidth = 6;
context.strokeStyle = "darkred";
context.moveTo (40, 40);
context.lineTo (250, 450);
context.lineTo (250, 350);
context.closePath ();
context.stroke ();
context.fillStyle = "red";
context.fill ();