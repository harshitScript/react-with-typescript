import React from "react";
import { Todo } from "../models/todo.model.";
import './TodoList.css'

interface TodoListProps {
    todos: Todo[],
    deleteTodo(id: string): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
    return <ul>
        {todos.map(todo => <li key={todo.id}><span>{`${todo.id}. ${todo.text}`}</span><button onClick={deleteTodo.bind(null, todo.id)}>DELETE</button></li>)}
    </ul>
}
export default TodoList