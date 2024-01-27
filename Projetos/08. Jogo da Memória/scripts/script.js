const CARD = "card"
const FRONT = "card_front"
const BACK = "card_back"
const ICON = "icon"

startGame()

// Inicia o jogo criando as cartas e embaralhando elas
function startGame() {

    initializeCards(game.createCardsFromTechs())
}

// Mostra as cartas na tela
function initializeCards(cards) {
    let gameBoard = document.getElementById("game-board")
    gameBoard.innerHTML = ""
    game.cards.forEach(card => {

        let cardElement = document.createElement("div")
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    })
}

// Cria parte da frente e de trás de cada carta
function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

// Cria o conteúdo de cada face da carta
function createCardFace(face, card, element) {
    let cardElementFace = document.createElement("div")
    cardElementFace.classList.add(face)
    if (face === FRONT) {

        let iconElement = document.createElement("img")
        iconElement.classList.add(ICON)
        iconElement.src = `./images/${card.icon}.png`
        cardElementFace.appendChild(iconElement)
    } else {

        cardElementFace.innerHTML = "&lt/&gt"
    }
    element.appendChild(cardElementFace)
}

// Vira a carta se estiver invertida
function flipCard() {

    if (game.setCard(this.id)) {
        this.classList.add("flip")
        if (game.secondCard) {
            if (game.checkMatch()) { // Formam par
                game.clearCards()
                if (game.checkGameOver()) {
                    let gameOverLayer = document.getElementById("gameOver")
                    gameOverLayer.style.display = "flex"
                }
            } else {
                setTimeout(() => { // Não forma par então a carta volta a ficar invertida

                    let firstCardView = document.getElementById(game.firstCard.id)
                    let secondCardView = document.getElementById(game.secondCard.id)

                    firstCardView.classList.remove("flip")
                    secondCardView.classList.remove("flip")
                    game.unflipCards()
                }, 1000)
            }
        }
    }
}

function restart() {
    game.clearCards()
    startGame()
    let gameOverLayer = document.getElementById("gameOver")
    gameOverLayer.style.display = "none"
}