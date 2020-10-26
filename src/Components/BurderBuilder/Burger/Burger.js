import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngreditent'
import './Burger.css'

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} types={igKey} />
            })
        }
    ).reduce((arr, el) => {
        return arr.concat(el);
    }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding ingredients</p>
    }

    return (
        <div className="burger-container">
            <div className="burger">
                <BurgerIngredient types="bread-top" />
                {transformedIngredients}
                <BurgerIngredient types="bread-bottom" />
            </div>
        </div>
    )
}

export default Burger;