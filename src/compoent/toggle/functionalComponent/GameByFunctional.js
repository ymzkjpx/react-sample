import React from 'react'
import Board from './Board'

const Game = ({patternName}) => {
  return (
    <div>
      <Board patternName={patternName}/>
    </div>
  );
}

export default Game