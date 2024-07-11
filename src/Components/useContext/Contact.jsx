import { useContext } from "react";
import { AppContext } from "./AppContext";

const Contact = () => {
    const { phone, users } = useContext(AppContext);


    return (
        <div>
            <h2>Contact</h2>
            <p>Phone: {phone}</p>
            {users.map(user => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default Contact;
