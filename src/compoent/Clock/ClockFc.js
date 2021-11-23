import React, { useEffect } from 'react'

const ClockFc = () => {
    const [zikan, setZikan] = useEffect(new Date())
useEffect(()=>{

})

const tick  = () =>{
    setZikan({
        zikan: new Date()
    })
}

return(
    <div>
        <h2>Clock Time by FC</h2>
        <p>It is {zikan}</p>
    </div>
)

}


