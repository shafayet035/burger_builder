
import React from 'react'
import './BackDrop.css'

const BackDrop = (props) => {
    return (
        props.show ? <div className="backDrop" onClick={props.clicked}></div> : null
    )
}

export default BackDrop