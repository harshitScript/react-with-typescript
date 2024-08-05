import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './interface/todo';

const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([{ id: "1", text: 'Finish your work.' }]);
  const addTodo = (todo: Todo) => {
    setTodo(curr => [...curr, todo])
  }
  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
