import React, {useState} from "react";
import PropType from 'prop-types'

function useInputValue() {
    const [value, setValue] = useState( '')

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {

            onCreate(input.value())
            console.log('value was created: ', input.value())
            input.clear()
        }
    }

    return (
        <form className='inputForm' onSubmit={submitHandler}>
            <input type="text" {...input.bind} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propType = {
    onCreate: PropType.func.isRequired
}

export default AddTodo