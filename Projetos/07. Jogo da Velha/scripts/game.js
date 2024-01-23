// Iniciando as variáveis
let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0 // 0 se é vez do player 1 e 1 se do player dois
let symbols = ["o", "x"]
let gameOver = false // Caso seja verdadeiro impossibilita o jogo de continuar

// O que acontece a cada movimento
function handleMove(position) {

    // Verifica se o jogo já terminou antes de jogar
    if (gameOver) {
        return
    }

    // Se um dos espaços do tabuleiro estiver vazio será preenchido com o símbolo do jogador da vez
    if (board[position] == "") {
        board[position] = symbols[playerTime]

        gameOver = isWin()

        if (!gameOver) {
            if (playerTime == 0) {
                playerTime = 1
            } else {
                playerTime = 0
            }
        }
    }
    return gameOver
}

// Verifica se houve um vencedor no jogo
function isWin() {

    // Possibilidades de vitória
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let winState of winStates) {
        let pos1 = winState[0]
        let pos2 = winState[1]
        let pos3 = winState[2]

        if (board[pos1] != '' && board[pos1] == board[pos2] && board[pos1] == board[pos3]) {
            return true
        }
    }
    return false
}