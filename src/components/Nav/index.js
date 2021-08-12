import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav row" id="nav">
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/portfolio">Portfolio </NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact </NavLink>

    </div>
  );
}

export default Nav;