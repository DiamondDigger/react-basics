import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.data.map((item, index) => {
                return <TodoItem record={item} key={item.id} index={index}/>
            })}
        </ul>
    )
}