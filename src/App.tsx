import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './models/todo.model.';

const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    setTodo(curr => [...curr, todo])
  }
  const deleteTodo = (id: string) => {
    setTodo(curr => curr.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
