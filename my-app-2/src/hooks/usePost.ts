import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

interface Posts {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const usePost = (userId: number | undefined) => {
    const fetchPosts = () =>
        axios
            .get<Posts[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    userId
                }
            })
            .then(res => res.data)

    return useQuery<Posts[], Error>({
        queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
        queryFn: fetchPosts,
        staleTime: 10 * 1000,
    })
}

export default usePost;