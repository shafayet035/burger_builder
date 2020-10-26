import React from 'react';
import './BurgerControl.css'

const BurgerControl = (props) => {
    return (
        <div className="burger-control">
            <label>{props.label}:</label>
            <div>
                <button
                    className="add"
                    onClick={props.addIng}>Add</button>
                <button
                    className="remove"
                    onClick={props.rmvIng}
                    disabled={props.disabled} >Remove</button>
            </div>
        </div>
    )
}

export default BurgerControl