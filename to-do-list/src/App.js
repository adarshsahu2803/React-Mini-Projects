import { useState } from 'react';
import './App.css';

function App() {
  const message = () => {
    return 'this is todolist.'
  }

  const msg1 = 'this is msg1'

  return (
    <div>
      <h1>Todo List</h1>
      <p>{message()}</p>
      {msg1}
    </div>
  );
}

export default App;
