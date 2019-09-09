import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch(action.type){
    case "ADD":
      return [...state, {id: uuid(), task: action.task, completed: false}]
  }
}
// {type: "Add", task: "Walk Dog"}
// {type: "Remove", id: 23232}

addTodo: newTodoText => {
      setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
          todo.id === todoId ? {...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
          todo.id === todoId ? {...todo, task: newTask  } : todo
        );
        setTodos(updatedTodos);
    }