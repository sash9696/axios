import React, { useState } from 'react';
import './App.css';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([])

  const handleChange = (event) => {
      setTodoText(event.target.value)
      
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      setTodoList((arr) => [...arr, todoText])
      setTodoText('')
  }
  const deleteToDo = (key) => {
     todoList.splice(key, 1);
     setTodoList((arr) => [...arr])
  }

  return (
    <div className="app">
      <header className='app-header'>
          <h1>To Do</h1>
      </header>
      <form>
          
          <label className='todo-label'>What do you want to do today?</label>
          <br/>
          <input value={todoText} onChange={handleChange}  type='text'/>
          <button onClick={handleSubmit}  className="button" type="submit" value="Submit">Submit</button>
      </form >
     {todoList.map((td,index) => td && (
          <div key={index} className="todo">
          <br/>
          <input type='checkbox' />
          <label >{td}</label>
          <IconButton 
              aria-label="delete"
              onClick={() => deleteToDo(index)}
          >
              <DeleteIcon/>
          </IconButton>
        </div>
     ))}
      
     
    </div>
  );
}

export default App;
