import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState(0)
  const incrementCount = () => { setInputText(parseFloat(inputText) + 1) }
  const decrementCount = () => { setInputText(parseFloat(inputText) - 1) }

  const changeCounter = e => {
    setInputText(e.target.value)
  }

  const inputStyle = {
    height: "45px",
    width: "150px",
    "text-align": "center",
  }

  return (
    <div class="content">
      <button onClick={decrementCount}>-</button>
      <h1>
        <input
          type='number'
          value={inputText}
          onChange={changeCounter}
          style={inputStyle}
        />
      </h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
