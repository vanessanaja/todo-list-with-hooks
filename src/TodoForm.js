import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useinputState from './Hooks/useInputState';

function TodoForm({addTodo}){
  const [value, handleChange, reset] = useinputState("");
  return(
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo(value);
        reset();
        }}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin='normal' 
          label='Add New Todo'
          fullWidth>
        </TextField>
      </form>  
    </Paper>
  );
}

export default TodoForm;