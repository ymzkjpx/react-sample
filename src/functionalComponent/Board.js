import React from 'react'
import Square from './Square'

const Board = ({patternName}) => {
  const status = 'Next player: X';
  const name = patternName;

  const renderSquare = (i) => {
    return <Square value={i}/>;
  }

  return (
    <div>
      <div>
        <p>Made by {name}</p>
      </div>
      <div>{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board