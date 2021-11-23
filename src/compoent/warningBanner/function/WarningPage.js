import React, { useState } from 'react'
import WarningBanner from './WarningBanner'

const WariningPage = () => {
    const [showWarning, setShowWarning] = useState(true)

    return(
        <div>
        <button onClick={()=>setShowWarning(prevShowWarning => !prevShowWarning)}>
            {showWarning ? 'Hide' : 'Show'}
        </button>
        <WarningBanner warn={showWarning} />
    </div>
    )
}

export default WariningPage