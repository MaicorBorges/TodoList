import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";


// import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Seguir el curso', completed: false },
  { text: 'Terminar la cena', completed: false },
  { text: 'Regar', completed: true },
];



function App() {
  return (
   <>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        />
        ))}

      </TodoList>
      <CreateTodoButtom />      
   </>
  );
}

export default App;