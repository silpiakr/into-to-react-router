import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;

    return (
        <div className="border-2 px-8 py-3 mb-3 rounded-lg">
            <h2 className="font-bold">{id}: {name}</h2>
            <p><small>{email}</small></p>
            <p> Phone no. {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button className="px-6 py-2 text-white font-bold rounded bg-slate-400 ml-3">Click me</button>
            </Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}

export default User;