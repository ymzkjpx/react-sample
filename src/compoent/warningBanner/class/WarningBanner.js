import React, {Component} from 'react'

class WarningBanner extends Component {
  render() {
    if (this.props.warn) {
      return (
        <div className="warning">
          <p>Warnign!</p>
        </div>
      )
    }
    return (null)
  }
}

export default WarningBanner