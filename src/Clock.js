import React from "react";
import ReactDOM from "react-dom"

const styles = {
    h2: {
        margin: 'auto',
        marginLeft: '5rem'
    },
    span: {
        color: 'green'
    }
}

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
                <span style={styles.span}> Do you know what? </span>
                <h2 style={styles.h2}>Now is {this.state.date.toLocaleTimeString()}</h2>
            </div>

        )
    }
}