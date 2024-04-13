import React, { useState } from 'react';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App" >
     <a href="/home"><h1>Todo List</h1></a> 
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`todo ${todo.isCompleted ? 'completed' : ''}`}
          >
            <span>{todo.text}</span>
            <div className="todo-buttons">
              <button onClick={() => completeTodo(index)}>
                {todo.isCompleted ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
