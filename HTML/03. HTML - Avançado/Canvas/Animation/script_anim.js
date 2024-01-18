
let canvas = document.getElementById("tela");

let context = canvas.getContext("2d");


let circle = {
    x: 250,
    y: 250,
    r: 100,
    inicio: 0,
    fim: 0
    //antiHorario: true;
}

function drawCircle (c) {

    context.beginPath();

    context.rect(0, 0, 500, 500);
    context.fillStyle = "white";
    context.fill ();

    context.beginPath ();

    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 7;
    context.arc (c.x, c.y, c.r, c.inicio, c.fim);
    //c.antiHorario faria o circulo ser apagado e não desenhado
    context.stroke ();
    context.fill ();
}

setInterval (function () {

    if (circle.fim < 2*Math.PI) {
        circle.fim += 0.1;
        circle.x += 1;
    }

    drawCircle (circle)

}, 10)

