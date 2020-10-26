import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl'
import './BurgerControls.css'


const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
]



const BurgerControls = (props) => {
    return (
        <div className="burger-controls">
            <p className="total-price">Total Price: <strong>${props.price.toFixed(2)}</strong></p>
            <div className="container">
                {
                    control.map(ctrl => (
                        <BurgerControl
                            key={ctrl.label}
                            label={ctrl.label}
                            type={ctrl.type}
                            addIng={() => props.addIngredient(ctrl.type)}
                            rmvIng={() => props.removeIngredient(ctrl.type)}
                            disabled={props.displabled[ctrl.type]} />
                    ))
                }

                <button onClick={props.purchasing} disabled={!props.purchasable} className="orderBtn">{props.isAuth ?"ORDER NOW" : "Sign in to Continue"}</button>
            </div>
        </div>
    )
}

export default BurgerControls