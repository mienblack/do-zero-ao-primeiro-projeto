import React, { useEffect, useState } from "react"

function Counter(props) {
    const [count, setCount] = useState(props.count)

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")))
    }, [])

    useEffect(() => {
        document.title = count
        localStorage.setItem("count", count)
    }, [count])

    function add() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}

export default Counter