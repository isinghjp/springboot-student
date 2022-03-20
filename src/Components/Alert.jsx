import React from 'react'

function Alert(props) {
  return (
    <>
    <div style={{height:'50px'}} className="text-center container my-3">
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-success alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {props.alert.msg}
            </strong>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Alert