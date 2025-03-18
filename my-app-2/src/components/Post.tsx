import { useState } from "react";
import usePost from "../hooks/usePost";



const Post = () => {
    const [userId, setUserId] = useState<number | undefined>(undefined);
    const { data: posts, error, isLoading } = usePost(userId);

    if (isLoading) return <p>Loading...</p>
    if (error) return <p className="text-danger">{error.message}</p>
    return (
        <>
            <select onChange={(event) => setUserId(parseInt(event.target.value))}
                value={userId}
                className="form-select mb-3 mt-5">
                <option>Select the User</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>
            <h1>Posts</h1>
            <div>
                {posts?.map((post) => (
                    <div key={post.id}>{post.title}</div>
                ))}
            </div>
        </>
    )
}

export default Post;