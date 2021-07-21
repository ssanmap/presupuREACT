import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div>
            <p className="alert alert-danger error"> Hubo un Error {mensaje}</p>
        </div>
    )
}

export default Error
