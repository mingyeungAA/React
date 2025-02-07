import { createSlice } from "@reduxjs/toolkit";

//redux설정
//상태관리를 위한 슬라이스
//createSlice덕분에 action과 reducer를 한번에 만들수있음

const todoSlice = createSlice({
    name: "todo",
    initialState: { todos : [] }, //초기상태
    reducers: {
        addTodo: (state, action) => {state.todos.push(action.payload);},
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions; //액션내보내기
export default todoSlice.reducer; //리듀서 내보내기 