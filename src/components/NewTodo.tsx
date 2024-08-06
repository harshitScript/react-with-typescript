import React, { useRef } from "react"
import { Todo } from "../models/todo.model.";
import './NewTodo.css'

interface NewTodoProps {
    addTodo: (todo: Todo) => void
}
const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        addTodo({ id: `${Math.random()}`, text: enteredText });
        textInputRef.current!.value = ''
    }
    return <form onSubmit={handleSubmit} >
        <div className="form-control">
            <label htmlFor="todo">Todo Text:</label>
            <input ref={textInputRef} type='text' placeholder="enter todo text" />
        </div>
        <div>
            <button>Add Todo</button>
        </div>
    </form>
}
export default NewTodo