import { useLoaderData } from "react-router-dom";


const UserDetailes = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h2>Detailes about user: {name}</h2>
        </div>
    );
};

export default UserDetailes;