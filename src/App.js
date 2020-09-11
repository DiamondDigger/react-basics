import React, {useState} from 'react';
import TodoList from "./Todo/TodoList";
import {element} from "prop-types";

function App() {
    let initData = [
        {id: 1, completed: false, content: 'купить запчасти'},
        {id: 2, completed: false, content: 'собрать робота'},
        {id: 3, completed: false, content: 'захватить мир'}]

    const [data, setData] = React.useState(initData)

    function onToggle(id) {
        setData(
            data.map(element => {
                if (element.id === id) {
                    element.completed = !element.completed
                }
                return element
            })
        )
    }

    return (
        <div className='wrapper'>
            <h1>radio React ive </h1>

            <TodoList data={data} funcFromApp={onToggle}/>
            {/*<h2>{console.log(data)}</h2>*/}
        </div>
    );
}

export default App;
