import React from 'react'

const WarningBanner = ({warn}) => {
  if (warn) {
    return (
      <div className="warning">
        <p>Warnign!</p>
      </div>
    )
  }
  return (null)
}

export default WarningBanner