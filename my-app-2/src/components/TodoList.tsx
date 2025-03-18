import useTodos from "../hooks/useTodos"


const TodoList = () => {
    const { data: todos, error, isLoading } = useTodos();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p className="text-danger">{error.message}</p>

    return (
        <>
            <h1>Todo-List</h1>
            <ul className="list-group">
                {todos?.map((todo) => (
                    <li key={todo.id} className="list-group-item">{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList