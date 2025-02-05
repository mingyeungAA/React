import React, {useState} from 'react';

function App(){

  const [tasks, setTasks] = useState([]); //할 일 목록
  const [newTask, setNewTask] = useState(''); //새로운 할 일 (초기화)

  //할 일 추가 함수
  const addTask = () => {
    if(newTask.trim()){
      setTasks([...tasks, newTask]); //새로운 할 일을 목록에 추가
      setNewTask(''); //새로운 할 일 입력값 초기화
    }
  }

  //할 일 삭제 함수
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  }


    return (
        <div style={{padding:'20px'}}>
            <h1>To Do List</h1>
            <input 
              type="text" 
              placeholder='할일을 입력하세요'
              style={{padding:'7px', marginRight:'6px'}}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)} //입력값 업데이트
            />
            <button onClick={addTask} style={{ padding: '7px', cursor: 'pointer' }}>추가</button>

            <ul>
              {tasks.map((task, index) => (
                <li key={index} style={{marginBottom:'10px'}}>
                  {task}
                  <button onClick={() => {deleteTask(task)}} style={{marginLeft:'7px'}}>삭제</button>
                </li>
              ))}
            </ul>
        </div>
    );
}

export default App;