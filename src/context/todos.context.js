//context that will keep track of todos and all methods that interact with todos
import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../Hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: 'Grocery shop', completed: false },
  { id: 2, task: 'Walk dog', completed: false }
]
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>   
    </TodosContext.Provider>
  );
}  
