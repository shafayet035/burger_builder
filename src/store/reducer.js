import * as actionTypes from './action'

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,

    },
    totalPrice: 4,
    token: null,
    userId: null,
    building: false
}

const Ingredient_Price = {
    salad: 0.4,
    cheese: 0.6,
    meat: 1.3,
    bacon: 0.4,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + Ingredient_Price[action.ingredientName],
                building: true
            }
        case (actionTypes.REMOVE_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - Ingredient_Price[action.ingredientName],
                building: true
            }
        case( actionTypes.LOAD_INGREDIENT):
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                building: false
            }
        
        case(actionTypes.GET_AUTH): 
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        case(actionTypes.LOGOUT): 
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        case(actionTypes.GET_LOCAL_AUTH):
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        
        default:
            return state
    }
}

export default reducer