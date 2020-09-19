import React, {useState} from "react";
import './Modal.css'

function ModalFunctional(props) {
    console.log('props.title: ', props.title)
    console.log('props.info: ', props.info)
    const [title,setTitle] = useState(props.title)
    const [info,setInfo] = useState(props.info)
    const [isOpen, setIsOpen] = useState(false)
    console.log('title: ', title)
    console.log('info: ', info)

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