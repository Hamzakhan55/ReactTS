import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostQuery {
    page: number;
    pageSize: number;
}

const usePost = (query: PostQuery) => {
    const fetchPosts = () =>
        axios
            .get<Posts[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then(res => res.data)

    return useQuery<Posts[], Error>({
        queryKey: ['posts', query],
        queryFn: fetchPosts,
        staleTime: 10 * 1000,
    })
}

export default usePost;