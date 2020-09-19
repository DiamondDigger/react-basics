import React, {useContext} from "react";
import './Modal.css'
import Context from '../context'

export default class Modal extends React.Component {
    state = {
        turnOn: false,
        title: 'Some title',
        info: 'Some useful info according to the title'
    }

    render() {
        return (

            <React.Fragment>
                <button onClick={() => this.setState({turnOn: true})}>Open modal</button>

                {this.state.turnOn &&
                (<div className='modal'>
                    <div className='modal-body'>
                        <h2>{this.state.title}</h2>
                        <input type="text"
                               onChange={(event)=> this.setState({title: event.target.value})}/>

                        <p>{this.state.info}</p>
                        <input type="text"
                               onChange={(event) => this.setState({info: event.target.value})}/>
                        <button style={{display: 'block', marginTop: '1rem'}}
                                onClick={() => this.setState({turnOn: false})} >Close modal</button>
                    </div>
                </div>)
                }
            </React.Fragment>

        )
    }
}