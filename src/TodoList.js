import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

function TodoList(props){
  return(
    <Paper>
      {props.todos.map(todo => (
        <li>{todo.task}</li>
      ))}
    </Paper>
  );
}

export default TodoList;