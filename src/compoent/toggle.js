import { construct } from 'harmony-reflect';
import React from 'react'

const Toggle = ({toggle}) => {
    const [check, setCheck] = useState(false);
    setCheck(prevCheck => !prevCheck);

    return(
        if()
    )
}

const [check, setCheck] = useState(false);
// ...
setCheck(prevCheck => !prevCheck);


"use strict";

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on || false
        };
    }
    clickHandler() {
        this.setState({
            on: !this.state.on
        });
    }
    render() {
        let className = this.state.on ? "switch on" : "switch";
        return (
            <div className={className} onClick={this.clickHandler.bind(this)}></div>
        );
    }
}

ReactDOM.render(
    <ToggleButton on={true}></ToggleButton>,
    document.querySelector("#root")
);