import React, { useState } from "react";
import { Link } from 'react-router-dom'

function NavItem(props){

    const [open, setOpen] = useState(false);

    return(
      <>
        <li className="nav-item">
          <a href="#home" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
          </a>
          {open && props.children}
        </li>
      </>
    )
}

export default NavItem;