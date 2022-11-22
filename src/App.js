import React, { useReducer, createContext } from 'react';
import ToDoList from './components/TodoList';
import style from './style.module.css'


const todosInitialState = {
  todos: [
    { id: 1, text: "finishing building todo-App" },
    { id: 2, text: "update the UI" },
    { id: 3, text: "read bible" }
  ]
};

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      const newToDo = { id: Math.random().toLocaleString, text: action.payload }
      // add new todo onto array
      const addedToDos = [...state.todos, newToDo]

      // spread our state and assign todos
      return { ...state, todos: addedToDos }

    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }

    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }

    default:
      return todosInitialState
  }
}
export const TodosContext = createContext()

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <div className={style.app}>
      <h1 className='text-dark text-center fw-bold fs-1 mb-5 mt-2'>Please Enter a Todo Below</h1>
      <TodosContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
