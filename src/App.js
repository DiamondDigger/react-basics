import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const data = [
        {id: 1, completed: false, content: 'купить запчасти'},
        {id: 2, completed: false, content: 'собрать робота'},
        {id: 3, completed: false, content: 'захватить мир'}
    ]

    function onToggle(content, id){
        console.log(content, id)
    }

  return (
    <div className='wrapper'>
      <h1>radio React ive </h1>

      <TodoList data={data} funcFromApp={onToggle} />
    </div>
  );
}

export default App;
