import React from 'react'
import App from '../../App';
import Board from './Board'

const Game = ({patternName}) => {
  return (
    <div>
      <Board patternName={patternName}/>
    </div>
  );
}

export default Game