import { useState } from "react";
import usePost from "../hooks/usePost";



const Post = () => {
    const pageSize = 10;
    const [page, setPage] = useState(1);
    const { data: posts, error, isLoading } = usePost({ page, pageSize });

    if (isLoading) return <p>Loading...</p>
    if (error) return <p className="text-danger">{error.message}</p>
    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button
                disabled={page === 1} onClick={() => setPage(page - 1)} className="btn btn-primary my-2 me-2" style={{ marginRight: '5px' }}>Previous</button>
            <button onClick={() => setPage(page + 1)} className="btn btn-primary my-2 ms-2">Next</button>
        </>
    )
}

export default Post;