// Carregar a página
document.addEventListener('DOMContentLoaded', () => {

    // Habilita clique em cada quadrado do tabuleiro
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

// O que acontece a cada clique no tabuleiro
function handleClick(event) {
    console.log(event.target)
    let position = event.target.id
    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo acabou")
        }, 10)
    }
    updateSquare(position)
}

// Muda o símbolo do quadrado de vazio para o símbolo do jogador
function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    if (symbol != "") {
        square.innerHTML = `<div class="${symbol}"></div>`
    }
}