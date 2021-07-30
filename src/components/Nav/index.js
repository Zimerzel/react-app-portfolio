import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(props) {

  return (
    <div className="nav row" id="nav">
        <NavLink to="/about">about </NavLink>
        <NavLink to="/portfolio">portfolio </NavLink>
        <NavLink to="/contact">contact </NavLink>
        <NavLink to="/resume">resume</NavLink>
    </div>
  );
}

export default Nav;