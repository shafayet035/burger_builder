import React, { Component } from "react";
import Aux from "../../hocs/Aux";
import Burger from "./Burger/Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import Modal from "./Modal/Modal";
import OrderSummery from "./OrderSummery.js/OrderSummery";
// import axios from "../../axios-orders";
import Spinner from "../Spinner/Spinner";

import { connect } from 'react-redux'
import * as actionTypes from '../../store/action'
import axios from '../../axios-orders'




class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    this.setState({loading: true})
    axios
      .get("https://burger-builder-32c18.firebaseio.com/ingredients.json")
      .then((Response) => {
        this.props.loadIngredient(Response.data)
        this.setState({ loading: false })
      })
      .catch((error) => console.error(error));
  }

  orderBtnHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };


  orderSummeryHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true });
    } else {
      this.props.history.push('/auth')
    }
  };

  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };

  cancelOrderSummery = () => {
    this.setState({ purchasing: false });
  };

  continueOrderSummery = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let ordersummery = (
      <OrderSummery
        ingredients={this.props.ings}
        orderCancel={this.cancelOrderSummery}
        orderContinue={this.continueOrderSummery}
        totalPrice={+this.props.price}
      />
    );

    if (this.state.loading) {
      ordersummery = <Spinner />;
    }

    let burger = <Spinner />;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BurgerControls
            addIngredient={this.props.ingredientAdd}
            removeIngredient={this.props.ingredientRemove}
            displabled={disabledInfo}
            price={this.props.price}
            purchasable={this.orderBtnHandler(this.props.ings)}
            purchasing={this.orderSummeryHandler}
            isAuth={this.props.isAuth}
          />
        </Aux>
      );
    }

    return (
      <Aux>
        <Modal
          cancelPurchase={this.cancelPurchase}
          show={this.state.purchasing}
        >
          {ordersummery}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapState = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    isAuth: state.token !== null
  }
}

const mapDispatch = Dispatch => {
  return {
    ingredientAdd: (ingName) => Dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    ingredientRemove: (ingName) => Dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName }),
    loadIngredient: (Allingredients) => Dispatch({type:actionTypes.LOAD_INGREDIENT, ingredients: Allingredients})
  }
}


export default connect(mapState, mapDispatch)(BurgerBuilder);
