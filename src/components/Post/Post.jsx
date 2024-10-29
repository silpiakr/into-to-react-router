import PropTypes from "prop-types";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="border-2 rounded py-2 px-6 text-left mb-3">
            <h2>Post of Id: {id}</h2>
            <p>{title}</p>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;