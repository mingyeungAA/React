import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        if(text.trim()){
            dispatch(addTodo(text));
            setText('');
        }
    }

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={handleAdd}>추가</button>
        </div>
    )
};

export default TodoForm;