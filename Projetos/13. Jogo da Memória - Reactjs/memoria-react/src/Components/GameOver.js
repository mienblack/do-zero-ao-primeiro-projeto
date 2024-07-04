import React from "react";

export default function GameOver(props) {


    return (props.show ?
        <div id="game-over">
            <div>
                Parabéns Você Completou o Jogo
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue Novamente</button>
        </div> :
        <></>
    )
}