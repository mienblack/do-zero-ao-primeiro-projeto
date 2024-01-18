import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
    const login = useSelector(state => state)

    return (

        login
            ? (children)
            : (<Navigate to={{
                pathname: "/negado",
            }}>
            </Navigate>)

    )
}