import React, {useState, useEffect} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";

function App() {
    let initData = [
        {id: 1, completed: true, title: 'купить запчасти'},
        {id: 2, completed: false, title: 'собрать робота'},
        {id: 3, completed: true, title: 'захватить мир'}]

    let [data, setData] = React.useState([])

    const [loading, setLoading] = useState(true)

    const AddTodo = React.lazy(() => new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./Todo/AddTodo'))
        }, 2000)
    }))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(data =>
                setTimeout(() => {
                        setData(data)
                        setLoading(false)
                    }
                    , 3000)
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
                <React.Suspense fallback={<p>Please wait, component is loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
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
