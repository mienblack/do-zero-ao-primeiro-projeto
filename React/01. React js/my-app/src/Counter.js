import React, { useEffect, useState } from "react";

/*
function Counter(props) {

    const [count, setCount] = useState(props.count)

    useEffect(() => {

        setCount(parseInt(localStorage.getItem("count")))

        return (
            console.log("Não tem mais contador")
        )
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
            <button onClick={add} >add</button>
        </div>
    )
}
*/

class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = { count: 0 }
        this.add = this.add.bind(this)
    }

    add() {

        this.setState((state) => {
            return { count: state.count + 1 }
        }
        )
    }

    componentDidMount() {
        document.title = this.state.count
        this.setState(JSON.parse(localStorage.getItem("state")))
    }

    componentDidUpdate() {
        document.title = this.state.count
        localStorage.setItem("state", JSON.stringify(this.state))
    }


    shouldComponentUpdate() {
        return true
    }

    componentWillUnmount() {
        console.log("Unmount DONE")
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add} >add</button>
            </div>
        )
    }
}


export default Counter