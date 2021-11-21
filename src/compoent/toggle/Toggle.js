import React from 'react'
import {useState} from 'react'
import GameByClass from './classComponent/GameByClassComponent'
import GameByFunctional from './functionalComponent/GameByFunctional'

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const showComponent = () => {
    if (toggle) return <GameByClass patternName="FunctionalComponent"/>
    if (!toggle) return <GameByFunctional patternName="ClassComponent"/>
  }

  return (
    <div>
      <button onClick={() => setToggle(prevState => !prevState)}>Function / Class</button>
      <div>{showComponent()}</div>
    </div>
  )
}

export default Toggle