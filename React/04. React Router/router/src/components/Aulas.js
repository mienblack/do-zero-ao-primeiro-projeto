import styles from './Aulas.module.css'
import aulas from '../Data'
import { Link, useMatch } from 'react-router-dom'

export default function Aulas() {
    let match = useMatch("/aulas/").pattern.path

    return (
        <div className={styles.classes}>
            <h2>Aulas</h2>
            <ul>
                {aulas.map(aula => {
                    return (
                        <li key={aula.id}><Link to={`${match}${aula.id}`}>{aula.title}</Link></li>
                    )
                })}
            </ul>
        </div >
    )
}