import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="border-2 rounded py-2 px-6 text-left">
            <h2>Post of Id: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>
                <button className="px-6 py-2 text-white font-bold rounded bg-slate-400 my-5">Show Details</button>
            </Link>
            <button onClick={handleReadMore}>Read More</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;