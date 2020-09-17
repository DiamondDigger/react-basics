import React, {useState} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    let initData = [
        {id: 1, completed: true, content: 'купить запчасти'},
        {id: 2, completed: false, content: 'собрать робота'},
        {id: 3, completed: true, content: 'захватить мир'}]

    let [data, setData] = React.useState(initData)

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

    function removeTodoItem(id) {
        setData(data.filter(el => el.id !== id))
    }


    function addTodo(value) {
        setData(
            data.concat([{
                id: Date.now(),
                completed: false,
                content: value
            }])
        )
    }

    return (
        <Context.Provider value={{removeTodoItem}}>
            <div className='wrapper'>
                <h1>radio React ive </h1>
                <AddTodo onCreate={addTodo} />
                {data.length
                    ? <TodoList data={data} funcFromApp={onToggle}/>
                    : <h2>Ooopps..We have no todos for you, buddy!</h2>
                }
                {/*<h2>{console.log(data)}</h2>*/}
            </div>
        </Context.Provider>
    );
}

export default App;
