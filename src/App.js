import React, {useState, useEffect} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";

function App() {
    let initData = [
        {id: 1, completed: true, title: 'купить запчасти'},
        {id: 2, completed: false, title: 'собрать робота'},
        {id: 3, completed: true, title: 'захватить мир'}]

    let [data, setData] = React.useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(data =>
                setTimeout(() => {
                        setData(data)
                        setLoading(false)
                    }
                    , 5000)
            )
    }, [])


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
                title: value
            }])
        )
    }

    return (
        <Context.Provider value={{removeTodoItem}}>
            <div className='wrapper'>
                <h1>radio React ive </h1>
                <AddTodo onCreate={addTodo}/>
                {data.length
                    ? <TodoList data={data} funcFromApp={onToggle}/>
                    : (loading
                        ? <Loader/>
                        : <h2>Ooopps..We have no todos for you, buddy!</h2>)
                }
                {/*<h2>{console.log(data)}</h2>*/}
            </div>
        </Context.Provider>
    );
}

export default App;
