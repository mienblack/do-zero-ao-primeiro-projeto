
let canvas = document.getElementById("tela");

let context = canvas.getContext("2d");

context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(500, 0);
context.lineWidth = 3;
context.strokeStyle = "darkblue";
context.stroke();