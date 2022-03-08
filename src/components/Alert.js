import React from 'react'

function Alert(props) {

  return props.message && (
    <div className="alert alert-success" role="alert">
      <strong>{props.status}</strong> {props.message}
    </div>
  )
}

export default Alert
