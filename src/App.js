import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoContainer from './TodoContainer';


function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput("")
  }

  return (
    <div className="app">
      <h1>Hello!</h1>

      <form>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} type="text"/>
        <button disabled={!input} onClick={handleSubmit} type="submit">Add Todo</button>
      </form>

      <TodoContainer todos={todos}/>
    </div>
  );
}

export default App;
