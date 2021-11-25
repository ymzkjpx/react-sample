import React from 'react'
// import Toggle from './compoent/toggle/Toggle'
// import Clock from './compoent/clock/class/Clock'
// import ClockFc from './compoent/clock/function/ClockFc'
// import WarningPage from './compoent/warningBanner/function/WarningPage'
import NumberList from './compoent/mapList/function/NumberList'

const App = () => {
  return (
    <>
      {/* <Toggle/> */}
      {/* <ClockFc /> */}
      {/* <WarningPage /> */}
      <NumberList numbers={[1,2,3]}/>
    </>
  )
}

export default App