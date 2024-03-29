import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import uuid from "uuid/v4";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }){
  if (todos.length)
  return(
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
            //can just pass in destructured todo instead of id, taks and completed
              {...todo}
              // id={todo.id}
              // task={todo.task}
              key={todo.id}
              // completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
              {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
  return null;
}

export default TodoList;
