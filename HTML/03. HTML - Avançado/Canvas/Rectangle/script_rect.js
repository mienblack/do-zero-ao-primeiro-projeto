
let canvas = document.getElementById("tela");

let context = canvas.getContext("2d");

context.rect(20, 20, 200, 400);
context.fillStyle = "lightgreen";

context.lineWidth = 4;
context.strokeStyle = "green";

context.fill ();
context.stroke ();

context.clearRect (70, 40, 100, 100);

//context.fillRect (70, 40, 100, 100);
//context.strokeRect (70, 40, 100, 100);