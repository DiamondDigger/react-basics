import React from "react";

const styles = {
    input: {}
}

function AddTodo() {
    return (
        <div className='inputForm'>
            <input type="text" style={styles.input}/>
            <button type='submit'>Add Todo</button>
        </div>
    )
}

export default AddTodo