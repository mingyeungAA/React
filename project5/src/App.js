import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//useSelector로 redux 상태를 가져오고, useDispatch로 redux의 액션을 실행할 수 있음
import { addTodo, removeTodo  } from "./redux/todoSlice";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos); //redux 스토어에서 가져온 할일 목록
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if(text.trim()){
      dispatch(addTodo(text));
      setText(""); //다시 값 초기화
    }
  };

  return (
    <div style={{padding:'20px'}}>
      <h2>Redux Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{marginRight:'5px'}}
        placeholder="할일을 입력하세요"
      />
      <button onClick={handleAddTodo}>추가</button> {/* onClick={() => dispatch(addTodo(text))}; 로 작성하면, 입력필드 초기화가 안됨 */}
      <ul>
        {todos.map((todo, index) => (
          <li style={{marginBottom:'5px'}}>
            {todo} <button onClick={() => dispatch(removeTodo(index))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
