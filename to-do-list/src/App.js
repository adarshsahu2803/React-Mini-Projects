import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './todoList';
import { v4 as uuidv4 } from 'uuid';
import { addItem, getAllTods } from './services';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoText) => {
    addItem(todoText);
    setTodos([...todos, {
      id: uuidv4(),
      text: todoText,
      completed: false
    }])

    console.log(getAllTods);
  }

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div class="content">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {console.log(todos)}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;

// 1. delete just on elemtnt from todoList
// 2. add update todo component
// 3. improve todo UI