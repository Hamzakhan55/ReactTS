import usePost from "../hooks/usePost";



const Post = () => {
    const { data: posts, error, isLoading } = usePost();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p className="text-danger">{error.message}</p>
    return (
        <>
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