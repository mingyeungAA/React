import { createSlice } from "@reduxjs/toolkit";

//counter값 관리하는 리듀서
//action.payload => 특정값으로 설정하려면 이렇게 작성.

const counterSlice = createSlice({
    name: "counter",
    initialState: { value : 0 }, //초기상태
    reducers: {
        increment: (state) => {state.value += 1;},
        decrement: (state) => {state.value -= 1;},
        setValue: (state, action) => {state.value += action.payload;},
    }
});

export const { increment, decrement, setValue } = counterSlice.actions;
export default counterSlice.reducer;