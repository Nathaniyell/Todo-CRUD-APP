// import React, { useReducer, createContext } from "react";

// const todoInitialState = {
//     todos: [
//         { id: 1, text: "finishing writing hooks chapter" },
//         { id: 2, text: "play with kids" },
//         { id: 3, text: "read bible" }
//     ]
// };

// function todoReducer(state, action) {
//     switch (action.type) {
//         default:
//             return todoInitialState
//     }
// }


// export const TodoContext = createContext()

// export const Todo = () => {
//     const [state, dispatch] = useReducer(todoReducer, todoInitialState)


//     return <div>
// <TodoContext.Provider value={{state, dispatch}}>
// This is a list
// </TodoContext.Provider>
//     </div>

// }

