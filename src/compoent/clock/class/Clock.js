import React, { Component } from 'react'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {zikan: new Date()}
    }

    componentDidMount(){
        this.myTimerId = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.myTimerId)
    }

    tick = () => {
        this.setState({
            zikan: new Date()
        })
    }

    render(){
        return(
            <div>
                <h2>CLock time</h2>
                <p>It is {this.state.zikan.toTimeString()}</p>
            </div>
        )
    }
}

export default Clock