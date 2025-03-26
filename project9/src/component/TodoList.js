import React from 'react';
import {useSelector} from 'react-redux';
import TodoItem from '../component/TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todo);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id}/>
                ))}
            </ul>
        </div>
    )
};

export default TodoList;