
let canvas = document.getElementById("tela");

let context = canvas.getContext("2d");

let x = 250;
let y = 250;
let r = 100;
let inicio = 0;
let fim = 2 * Math.PI;

context.beginPath ();

context.strokeStyle = "gray";
context.lineWidth = 5;

context.arc (x, y, r, inicio, fim);
context.stroke ();