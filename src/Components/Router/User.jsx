import { useParams } from "react-router"


const User = () => {

    const {username} = useParams()
    return (
        <div>
            <h2>Users : {username}</h2>
        </div>
    )
}

export default User