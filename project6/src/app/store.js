import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

//스토어 생성
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
