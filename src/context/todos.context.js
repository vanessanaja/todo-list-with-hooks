//context that will keep track of todos and all methods that interact with todos
import React, { createContext } from 'react';
import useTodoState from '../Hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Grocery shop', completed: false },
  { id: 2, task: 'Walk dog', completed: false }
]
export const TodosContext = createContext();

export function TodosProvider(props){
  const todoStuff = useTodoState(defaultTodos);
return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}  
