import React from 'react'

function Alert(props) {

  // fixing CLS (Cumulative Layout Shift)

  return <div style={{height: '50px'}}>

  {props.message && (
    <div className="alert alert-success" role="alert">
      <strong>{props.status}</strong> {props.message}
    </div>
  )}
  </div>
}

export default Alert
