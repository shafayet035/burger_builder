import React from "react";
import "./NavItem.css";
import { NavLink } from "react-router-dom";

const Navitem = (props) => {
  return (
    <li className="Navitem">
      <NavLink exact to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default Navitem;
