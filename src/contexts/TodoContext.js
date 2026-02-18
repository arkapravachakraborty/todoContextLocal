import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        }
    ],
    // now we have to add functionality , but not the definitation, we will add defination in the App.jsx file as we did in the theme project with darkTheme and lightTheme
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// we give useTodo the TodoContext so we get every method and functionality from here we only need to export useTodo and it access all the methods
export const useTodo = () =>{
    // when we add useContext we need to give a context in it as we put here TodoContext
    // here we talk about to do so we give here to do ; in previous project theme changer we give themeContext 
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider