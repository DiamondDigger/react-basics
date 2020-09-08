import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const data = [
        {id: 1, completed: false, content: 'купить запчасти'},
        {id: 2, completed: false, content: 'собрать робота'},
        {id: 3, completed: false, content: 'захватить мир'}
    ]

  return (
    <div className='wrapper'>
      <h1>radio React ive </h1>

      <TodoList data={data} />
    </div>
  );
}

export default App;
