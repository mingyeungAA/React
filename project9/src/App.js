import React from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import './scss/App.scss';

function App() {
  return (
    <div className="app">
      <h2>To Do 앱</h2>
      <button>Dark Mode</button>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
