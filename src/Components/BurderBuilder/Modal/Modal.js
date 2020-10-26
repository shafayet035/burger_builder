import React from 'react'
import './Modal.css'
import BackDrop from '../BackDrop/BackDrop'
import Aux from '../../../hocs/Aux'

const modal = (props) => {
    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.cancelPurchase} />
            <div className="Modal"
                style={{
                    transform: props.show ? "translateX(0)" : "translateX(-100vw)"
                }} >
                {props.children}
            </div>
        </Aux>
    )
}


export default React.memo(modal)