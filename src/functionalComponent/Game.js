import React, {Component} from 'react'
import Board from './Board'

const Game = ({patternName}) => {
  return (
    <div>
      <div>
        <Board patternName={patternName}/>
      </div>
    </div>
  );
}

export default Game