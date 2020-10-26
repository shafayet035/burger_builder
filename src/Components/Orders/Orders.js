import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Order from "./Order/Order";
import "./Orders.css";
import { connect } from 'react-redux'

const Orders = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(props.token)
  }, [props])

  const getOrders = (token) => { 
     axios.get("/orders.json?auth=" + token)
      .then((res) => {
        setOrders(res.data);
      });
  };

  const objectHandler = Object.values(orders);

  const arrayHandler = objectHandler.reverse().map((ord) => {
    if(ord.userId === props.userId) {
      return (
        <Order
          key={ord._id}
          name={ord.customer.name}
          price={ord.price}
          ingredients={ord.ingredients}
          id={ord._id}
        />
      );
    } else {
      return null
    }
  });

  return <div className="orders">{arrayHandler}</div>;
};

const mapState = (state) => {
  return {
    token: state.token,
    userId: state.userId
  }
}

export default connect(mapState) (Orders);
