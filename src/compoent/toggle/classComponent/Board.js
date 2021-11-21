import React, {Component} from 'react'
import Square from './Square'

class Board extends Component {
  renderSquare = (i) => {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';
    const name = this.props.patternName;

    return (
      <div>
        <div>
          <p>Made by {name}</p>
        </div>
        <div>{status}</div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board