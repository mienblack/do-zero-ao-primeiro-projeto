import React, { useContext } from "react";
import {CounterContext} from "../CounterContext"

function Header(props) {
    const [count, setCount] = useContext(CounterContext)
    return(
        <header className="header">
            <h2>Contador</h2>
            <div>
                {count}
            </div>
        </header>
    )
}

export default Header