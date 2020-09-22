import React from 'react'

const MiniToast = ({  text }) => {
    return (
        <div className="dark" style={{ position: 'fixed', right: '10px', bottom: '10px', width: '300px' }} >

            <span> {text} </span>
                 
        </div>
    )
}

export default MiniToast