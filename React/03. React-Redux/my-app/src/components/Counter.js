import styles from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
    const counter = useSelector(state => { return state.counter })
    const dispatch = useDispatch()

    return (<div>
        <h3 className={styles.title}>Counter</h3>
        <div className={styles.counter}>{counter}</div>
        <div>
            <button className={styles.btn} onClick={() => { dispatch({ type: 'DECREMENT' }) }}>-</button>
            <button className={styles.btn} onClick={() => { dispatch({ type: 'INCREMENT' }) }}>+</button>
        </div>
    </div>)
}

export default Counter