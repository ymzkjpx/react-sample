import React, { Component } from 'react'
import WarningBanner from './WarningBanner'

class WariningPage extends Component{
    constructor(props){
        super(props)
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarning: !this.state.showWarning
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <WarningBanner warn={this.state.showWarning} />
            </div>
        )
    }
}

export default WariningPage