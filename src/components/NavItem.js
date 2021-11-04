import React, { useState } from "react";
import { Link } from 'react-router-dom'

function NavItem(props){

    const [open, setOpen] = useState(false);

    return(
      <>
        <li className="nav-item">
          <Link to="#home" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
          </Link>
          {open && props.children}
        </li>
      </>
    )
}

export default NavItem;