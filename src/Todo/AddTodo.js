import React, {useState} from "react";
import PropType from 'prop-types'

function AddTodo({onCreate}) {

    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {

            onCreate(value)
            console.log('value was created: ', value)
            setValue( '')
        }
    }

    return (
        <form className='inputForm' onSubmit={submitHandler}>
            <input type="text"
                   value={value}
                   onChange={event =>
                       setValue(event.target.value)}/>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propType = {
    onCreate: PropType.func.isRequired
}

export default AddTodo