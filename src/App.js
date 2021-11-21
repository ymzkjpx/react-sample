import React from 'react'
import {useState} from 'react'
import GameByClass from './compoent/classComponent/GameByClassComponent'
import GameByFunctional from './compoent/functionalComponent/GameByFunctional'

const App = () => {
  const [toggle,
    setToggle] = useState(true);

  const showComponent = () => {
    if (toggle) 
      return (
        <div>
          <p>FunctionalComponent</p>
          <GameByFunctional patternName="FunctionalComponent"/>
        </div>
      )
    if (!toggle) 
      return (
        <div>
          <p>ClassComponent</p>
          <GameByClass patternName="ClassComponent"/>
        </div>
      )
  }

  return (
    <div>
      <button onClick={() => setToggle(prevState => !prevState)}>Function/Class</button>
      <div>{showComponent()}</div>
    </div>
  )
}

export default App