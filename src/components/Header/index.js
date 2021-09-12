import React from "react"
import Navbar from '../Nav/Nav'
import NavItem from "../Nav/NavItem";
import DropdownMenu from "../Nav/NavDropdown"
import heroImage from '../../assets/images/hero-bg.jpg'
import { ReactComponent as Menu } from '../../icons/menu.svg'

function Header(){
        return(
            <>
                <div id="header">
                    <div>
                        <a href= "https://github.com/Zimerzel/react-app-portfolio/"><img src={heroImage} id="hero"/></a>
                    </div>
                    <Navbar>
                    <h1 id="nav-title">Zach Imerzel</h1>
                        <NavItem icon={<Menu />}>
                            <DropdownMenu></DropdownMenu>
                        </NavItem>
                    </Navbar>
                </div>
            </>
        )
}

export default Header;
