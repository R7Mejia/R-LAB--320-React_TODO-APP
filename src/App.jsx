import React, { useReducer } from 'react';
import Todo from './components/Todo';


// Define actions
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  EDIT_TODO: 'edit-todo',
  SAVE_TODO: 'save-todo',
};

let todoIdCounter = 1; // Initialize a simple counter for unique IDs

// Reducer function
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, { id: todoIdCounter++, title: action.payload.text }];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.text };
        }
        return todo;
      });
    case ACTIONS.SAVE_TODO:
      return todos;
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const handleAddTodo = (text) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text } });
  };

  return (
    <>
      <div className='container'>
        <h1>My To-Do List</h1>
        <form  onSubmit={(e) => { e.preventDefault(); handleAddTodo(e.target.elements.input.value); }}>
          <input type="text" placeholder="add whatever you want!" id="input" name="text" />
          <button type="submit">Add </button>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </form>

      </div>
    </>
  );
}

export default App;
