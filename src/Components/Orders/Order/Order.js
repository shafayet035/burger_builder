import React from "react";
import "./Order.css";

const Order = ({ name, price, ingredients, id }) => {
  const Allingredients = [];

  for (let i in ingredients) {
    Allingredients.push({
      name: i,
      amount: ingredients[i],
    });
  }

  const ingredOut = Allingredients.map((ing) => {
    return (
      <div className="ingred" key={Math.floor(Math.random() * 2323)}>
        {ing.name} ({ing.amount})
      </div>
    );
  });

  return (
    <div className="order">
      <h4>Reciever Name: {name}</h4>
      <p>Dilevery Method: Fastest</p>
      <p>
        Price: <strong>${price.toFixed(2)}</strong>
      </p>
      <div>
        <h4>Ingredients: <span className="ing-item">{ingredOut}</span></h4>
      </div>
    </div>
  );
};

export default Order;
