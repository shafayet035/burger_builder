import React from "react";
import Navitem from "./NavItem/NavItem";
import "./NavItems.css";
import {connect} from 'react-redux'

const Navitems = (props) => {
  return (
    <div className="Navitems">
      <ul>
        <Navitem link="/">BurgerBuilder</Navitem>
        {props.token ? <Navitem link="/orders">Orders</Navitem> : null}
        {props.token ? 
          <Navitem link="/logout">Logout</Navitem>
          : <Navitem link="/auth">Login</Navitem>}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    token: state.token !== null
  }
}

export default connect(mapState) (Navitems);
