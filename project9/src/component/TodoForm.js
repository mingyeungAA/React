import React, {useState} from 'react';

const TodoForm = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button>추가</button>
        </div>
    )
};

export default TodoForm;