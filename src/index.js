import React from 'react';
import ReactDOM from 'react-dom';

// import Game from './classComponent/Game'
// ReactDOM.render(
//   <Game patternName="classComponent" />,
//   document.getElementById('root')
// );

import Game from './functionalComponent/Game'
ReactDOM.render(
  <Game patternName="functionalComponent" />,
  document.getElementById('root')
);