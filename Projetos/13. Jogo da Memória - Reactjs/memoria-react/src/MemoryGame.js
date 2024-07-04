import React, { useEffect, useState } from "react";
import GameOver from "./Components/GameOver";
import GameBoard from "./Components/GameBoard"
import game from './game'

export default function MemoryGame(props) {
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(game.createCardsFromTechs())
    }, [])

    function restart() {
        game.clearCards()
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function handleFlip(card) {
        if (game.setCard(card.id)) {
            if (game.secondCard) {
                if (game.checkMatch()) { // Formam par
                    game.clearCards()
                    if (game.checkGameOver()) {
                        // Game Over
                        setGameOver(true)
                    }
                } else {
                    setTimeout(() => { // Não forma par então a carta volta a ficar invertida
                        //No Match
                        game.unflipCards()
                        setCards([...game.cards])
                    }, 1000)
                }
            }
        }
        setCards([...game.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}