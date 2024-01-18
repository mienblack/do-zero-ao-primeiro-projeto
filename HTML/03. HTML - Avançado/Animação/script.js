
let player = document.getElementById("player");

let xInicial = 0;
let yInicial = 0;

function moverPlayer (x, y) {

    //a cada intervalo o número de pixels que são incrementados, modifica a posição do player
    let posX = x + "px";
    let posY = y + "px";

    player.style.top = posY;
    player.style.left = posX;
}

setInterval( function () {

    moverPlayer(xInicial++, yInicial++)
}, 3000)