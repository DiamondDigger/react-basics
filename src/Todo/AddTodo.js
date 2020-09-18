import React, {useState} from "react";
import PropType from 'prop-types'
import Modal from "../Modal/Modal";
import '../Modal/Modal.css'

function useInputValue() {
    const [value, setValue] = useState( '')
    const [info, setInfo] = useState('Some description should be here')
    return {
        bindValue: {
            value,
            onChange: (event) => setValue(event.target.value)
        },
        bindInfo: {
            info,
            onChange: (event) => setInfo(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value,
        info: () => info
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
            <form className='inputForm' onSubmit={submitHandler}>
                <input type="text" {...input.bindValue} />
                <button type='submit'>Add Todo</button>
            </form>

            <React.Fragment>
                <button onClick={this.setState({turnOn: true})}>Open modal</button>

                {this.state.turnOn &&
                (<div className='modal'>
                    <div className='modal-body'>
                        <h2>{input.value}</h2>
                        <input type="text" {...input.bindValue}/>

                        <p>{input.info}</p>
                        <input type="text" {...input.bindInfo} />
                        <button style={{display: 'block', marginTop: '1rem'}}
                                onClick={() => this.setState({turnOn: false})} >Close modal</button>
                    </div>
                </div>)
                }
            </React.Fragment>

        </div>
    )
}

AddTodo.propType = {
    onCreate: PropType.func.isRequired
}

export default AddTodo