import styles from './Nav.module.css'
import AuthButton from './AuthButton'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Nav() {
    const login = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(() => {
        if (login) {
            navigate("/")
        }
    }, [login])

    return (
        <div className={styles.nav}>
            <Link to='/'><h2>Home</h2></Link>
            <ul>
                <AuthButton />
                <li><Link to='/aulas'>Aulas</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
        </div>
    )
}