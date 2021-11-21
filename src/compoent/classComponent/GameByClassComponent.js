import React, {Component} from 'react'
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div>
        <Board patternName={this.props.patternName}/>
      </div>
    );
  }
}

export default Game