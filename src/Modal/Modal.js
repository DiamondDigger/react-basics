import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        turnOn: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({turnOn: true})}>Open modal</button>

                {this.state.turnOn &&
                (<div className='modal'>
                    <div className='modal-body'>
                        <h2>Some title</h2>
                        <p>Some useful info according to the title</p>
                        <button onClick={() => this.setState({turnOn: false})} >Close modal</button>
                    </div>
                </div>)
                }
            </React.Fragment>
        )
    }
}