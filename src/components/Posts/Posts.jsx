import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="py-12">
            <h2>Posts: {posts.length}</h2>
            <div className="border-2 rounded-lg p-4 grid md:grid-cols-2 gap-5 lg:grid-cols-4">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;