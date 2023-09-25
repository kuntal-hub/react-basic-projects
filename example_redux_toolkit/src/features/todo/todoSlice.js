import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {id: 1, text: "Fakir Admi 1"},
        {id: 2, text: "Fakir Admi 2"},
        {id: 3, text: "Fakir Admi 3"},
        {id: 4, text: "Fakir Admi 4"},
        {id: 5, text: "Fakir Admi 5"},
        {id: 6, text: "Fakir Admi 6"},
        {id: 7, text: "Fakir Admi 7"},
    ],
    laura:"12"
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        chengeLaura:(state,action)=>{
            state.laura=action.payload;
            
        },
    }
})

export const {addTodo, removeTodo,chengeLaura} = todoSlice.actions

export default todoSlice.reducer