import React from 'react';
import {useDispatch} from 'react-redux';
import { toggleTodo } from '../store/todoSlice';

const TodoItem = ({todo}) => {
    
    const dispatch = useDispatch();

    return (
        <li className={`todo-item ${todo.done ? 'done' : ''}`}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.text}
            </span>
            <button>삭제</button>
        </li>
    )
}
export default TodoItem;