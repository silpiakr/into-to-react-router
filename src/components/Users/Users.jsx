import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    // state --> data
    // state --> loading
    // use-state
    // fetch --> state set --> set-state
    return (
        <div className="p-12">
            <h2>Our user: {users.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 text-left gap-3">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;