import React, {useState} from "react";
import PropType from 'prop-types'
import Modal from "../Modal/Modal";
import '../Modal/Modal.css'

function useInputValue() {
    const [value, setValue] = useState( '')
    const [info, setInfo] = useState('Some description should be here')
    const [isOpen, setIsOpen] = useState(false)
    return {
        bindValue: {
            value,
            onChange: (event) => setValue(event.target.value)
        },
        bindInfo: {
            info,
            onChange: (event) => setInfo(event.target.value)
        },
        bindIsOpen: {
            isOpen,
            onClick: () => setIsOpen(!isOpen)
        },
        clear: () => setValue(''),
        value: () => value,
        info: () => info,
        isOpen: () => isOpen
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
        <div>

                <button onClick={input.bindIsOpen.onClick}>Open modal</button>

                {input.isOpen() &&
                (<div className='modal'>
                    <div className='modal-body'>
                        <h2>{input.value}</h2>
                        <input type="text" {...input.bindValue}/>

                        <p>{input.info}</p>
                        <input type="text" {...input.bindInfo} />
                        <button style={{display: 'block', marginTop: '1rem'}}
                                onClick={input.bindIsOpen.onClick} >Save and Close</button>
                    </div>
                </div>)
                }

        </div>
    )
}

AddTodo.propType = {
    onCreate: PropType.func.isRequired
}

export default AddTodo