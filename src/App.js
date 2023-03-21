import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Seguir el curso', completed: false },
  { text: 'Terminar la cena', completed: false },
  { text: 'Regar', completed: true },
];



function App() {
const [searchValue, setSearchValue] = React.useState('');


  return (
   <>
      <TodoCounter />    
      <TodoSearch 
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      
      />
      <TodoList>
        {todos.map(todo =>(<TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        />
        ))}

      </TodoList>
      <CreateTodoButton />      
   </>
  );
}

export default App;