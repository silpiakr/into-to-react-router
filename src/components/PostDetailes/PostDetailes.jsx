import { useLoaderData } from "react-router-dom";

const PostDetailes = () => {
    const post = useLoaderData();
    const {id, title, body} = post
    return (
        <div className="py-20">
            <div className="border-2 border-red-300 rounded-xl py-2 px-6 text-left space-y-2">
            <h2>Post Detailes about: {id}</h2>
            <p>Title: {title}</p>
            <p>{body}</p>
            </div>
        </div>
    );
};

export default PostDetailes;