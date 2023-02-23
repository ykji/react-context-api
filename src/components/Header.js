import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import "./styles.css";

const Header = () => {
  const { cart } = useContext(Cart);

  return (
    <Fragment>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Header;
