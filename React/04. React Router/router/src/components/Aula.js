import { useEffect, useState } from "react"
import { useParams, useMatch, Link } from 'react-router-dom'
import aulas from "../Data"

export default function Aula() {
    const id = Number(useParams().id)
    const [aula, setAula] = useState("")
    let match = useMatch(`/aulas/${id}/`).pattern.path

    useEffect(() => {
        console.log(match)
    })

    useEffect(() => {
        setAula(aulas.filter(aula => aula.id === id)[0])
    }, [id])
    return (
        <div>
            <h3>{aula.title}</h3>
            <p>{aula.desc}</p>
            <Link to={`${match}assistir`}>ASSISTIR</Link>
        </div>
    )
}