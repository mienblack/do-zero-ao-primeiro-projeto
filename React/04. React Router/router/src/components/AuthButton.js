import { loginAction, logoutAction } from '../actions/loginAction'
import { useDispatch, useSelector } from 'react-redux'

export default function AuthButton() {
    const login = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        login
            ? <button onClick={() => dispatch(logoutAction())}>logout</button>
            : <button onClick={() => dispatch(loginAction())}>login</button>

    )
}