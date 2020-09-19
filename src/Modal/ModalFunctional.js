import React, {useState} from "react";
import './Modal.css'

function ModalFunctional(props) {
    const titleFromAddTodo = props.title
    const infoFromAddTodo = props.info
    console.log(titleFromAddTodo)
    console.log(infoFromAddTodo)
    const [title,setTitle] = useState(titleFromAddTodo)
    const [info,setInfo] = useState(infoFromAddTodo)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <button onClick={() => setIsOpen(true)}> Open modal</button>

            {isOpen &&
            (<div className='modal'>
                <div className='modal-body'>
                    <h2>{title}</h2>
                    <input type="text" onChange={(event) => setTitle(event.target.value)}/>

                    <p>{info}</p>
                    <input type="text" onChange={(event) => setInfo(event.target.value)}/>
                    <button onClick={() => setIsOpen(false)}> Close modal</button>
                </div>
            </div>)}
        </React.Fragment>
    )
}

export default ModalFunctional