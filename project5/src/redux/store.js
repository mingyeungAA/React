import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

//Redux store를 생성하는 파일
const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;