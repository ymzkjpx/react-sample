import React, {Component} from 'react'
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div>
        <div>
          <Board patternName={this.props.patternName} />
        </div>
      </div>
    );
  }
}

export default Game