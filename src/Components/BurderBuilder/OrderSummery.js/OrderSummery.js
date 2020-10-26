import React from 'react'
import Button from '../Button/Button'


const orderSummery = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <div className="order-summery">
            <h3>Your Order Summery</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <h2>Your Total Price: ${props.totalPrice.toFixed(2)}</h2>
            <h4>Do you Want to Checkout?</h4>
            <Button btnType="Danger" clicked={props.orderCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.orderContinue}>Continue</Button>
        </div>
    )
}

export default orderSummery 