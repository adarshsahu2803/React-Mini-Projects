import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <todoList />
      <addItem />
    </div>
  );
}

export default App;
