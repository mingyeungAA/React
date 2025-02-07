import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setValue } from "../features/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value); //createSlice참조

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(setValue(10))}>set to 10</button>
        </div>
    )
}

export default Counter;