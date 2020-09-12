import React from "react";
import ReactDOM from "react-dom"

export default class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div className='clockComponent'>
                <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
            </div>

        )
    }
}