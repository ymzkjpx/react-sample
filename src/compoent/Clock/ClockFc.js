import React, {useEffect, useState} from 'react'

const ClockFc = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(()=>tick(), 1000)
    return () => {
      clearInterval(timerId)
    }
  })

  const tick = () => {
    setDate(new Date())
  }

  return (
    <div>
      <h2>Clock Time by FC</h2>
      <p>It is {date.toTimeString()}</p>
    </div>
  )
}

export default ClockFc