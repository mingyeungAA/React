import {createSlice} from '@reduxjs/toolkit';

let nextId = 1;

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({id: nextId++, text: action.payload, done: false})
        },
        deleteTodo: (state, action) => {
            return state.filter(t=> t.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.find(t => t.id === action.payload);
            if(todo) todo.done = !todo.done;
        }
    }
})