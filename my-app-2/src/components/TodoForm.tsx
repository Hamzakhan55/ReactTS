import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";
import axios from "axios";

interface AddTodoContext {
    previousTodos: Todo[]
}

const TodoForm = () => {
    const queryClient = useQueryClient();
    const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
                .then(res => res.data),

        onMutate: (newTodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];

            queryClient.setQueryData<Todo[]>(['todos'], (todos: Todo[] = []) => [newTodo, ...todos])

            if (ref.current) ref.current.value = ''; // Clear input field

            return { previousTodos }; // Send old todos to onError in case of failure
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(['todos'], (todos) =>
                todos?.map((todo) =>
                    todo === newTodo ? savedTodo : todo
                )
            );
        },
        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
        }
    });

    const ref = useRef<HTMLInputElement>(null);

    return (
        <>
            {addTodo.error && (<div className="alert alert-danger">
                {addTodo.error.message}
            </div>
            )}
            <form className="row m-3" onSubmit={event => {
                event.preventDefault();

                if (ref.current && ref.current.value)
                    addTodo.mutate({
                        id: 0,
                        title: ref.current?.value,
                        completed: false,
                        userId: 1
                    })
            }}>
                <div className="col">
                    <input ref={ref} type="text" className="form-control" />
                </div>
                <div className="col">
                    <button
                        disabled={addTodo.status === 'pending'}
                        className="btn btn-primary">
                        {addTodo.status === 'pending' ? 'Adding...' : 'Add'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default TodoForm