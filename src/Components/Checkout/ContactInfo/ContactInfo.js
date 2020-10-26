import React, { useState } from "react";
import axios from "../../../axios-orders";
import { connect } from 'react-redux'

import "./ContactInfo.css";
import Button from "../../BurderBuilder/Button/Button";
import Loading from "../../Spinner/Spinner";
import { withRouter } from "react-router-dom";

const ContactInfo = (props) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dilveryMethod, setDilveryMethod] = useState("Fastest");

  const orderSubmit = async (e) => {
    e.preventDefault();
    const order = {
      _id: Math.floor(Math.random() * 10000002163),
      ingredients: props.ings,
      price: props.price,
      customer: {
        name: name,
        phone: phone,
        address: {
          street: street,
          zipCode: zipCode,
        },
        email: email,
      },
      dilveryMethod: "Fastest",
      userId: props.userId
    };

    await axios
      .post("orders.json?auth=" + props.token, order)
      .then(setLoading(false))
      .then((res) => {
        setLoading(true);
        props.history.push("/orders");
      });
  };

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputPhoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const inputStreetHandler = (e) => {
    setStreet(e.target.value);
  };

  const inputZipHandler = (e) => {
    setZipCode(e.target.value);
  };

  const inputDilHandler = (e) => {
    setDilveryMethod(e.target.value);
  };

  return (
    <div className="contactInfo">
      {loading ? (
        <form onSubmit={(e) => orderSubmit(e)}>
          <input
            required
            onChange={inputNameHandler}
            type="text"
            placeholder="Full Name"
            value={name}
          />
          <input
            required
            onChange={inputEmailHandler}
            type="email"
            placeholder="Email"
            value={email}
          />
          <input
            required
            onChange={inputPhoneHandler}
            type="number"
            placeholder="Phone"
            value={phone}
          />
          <input
            required
            onChange={inputStreetHandler}
            type="text"
            placeholder="Street"
            value={street}
          />
          <input
            required
            onChange={inputZipHandler}
            type="text"
            placeholder="Zip Code"
            value={zipCode}
          />
          <select onChange={inputDilHandler} value={dilveryMethod}>
            <option value="Fastest">Fastest</option>
            <option value="Cheapest">Cheapest</option>
          </select>
          <Button type="submit" btnType="Success">
            Submit
          </Button>
        </form>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const mapState = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    token: state.token,
    userId: state.userId
  }
}



export default connect(mapState) (withRouter(ContactInfo));
