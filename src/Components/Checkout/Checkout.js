import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./Checkout.css";
import Button from "../BurderBuilder/Button/Button";
import Burger from "../BurderBuilder/Burger/Burger";
import ContactInfo from "./ContactInfo/ContactInfo";

const Checkout = (props) => {

  return (
    <div className="check-main">
      <div className="checkout">
        <Burger ingredients={props.ings} />
        <div>
          <Button btnType="Danger"> Cancel </Button>
          <Link to={props.match.path + "/contactinfo"}>
            <Button btnType="Success"> Continue </Button>
          </Link>
        </div>
        <Route
          path={props.match.path + "/contactinfo"}
          component={ContactInfo}
        ></Route>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    ings: state.ingredients
  }
}



export default connect(mapState)(Checkout);
