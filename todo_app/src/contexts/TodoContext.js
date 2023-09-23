// import creatContext and useContext from react
import React, { createContext, useContext } from 'react';
const TodoContext = createContext({
    todos: [
        {
        id: 1,
        todo: 'Todo 1',
        isCompleted: false
        },
    ],
        addTodo:(todo)=>{},
        deleteTodo:(id)=>{},
        updateTodo:(id,todo)=>{},
        toggleComplete:(id)=>{}
});
export const useTodoContext = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;