import React, { Suspense } from 'react'
import { ReactComponent as Caret } from '../icons/caret.svg'
import heroImage from '../assets/images/hero-bg.jpg'
// import Navbar from './Nav'
const Navbar = React.lazy(() => import('./Nav'))
// import NavItem from "./NavItem";
const NavItem = React.lazy(() => import('./NavItem'))
// import DropdownMenu from "./NavDropdown";
const DropdownMenu = React.lazy(() => import('./NavDropdown'))

function Header() {
    return(
        <div id="header">
            <div id="header">
                <img src={heroImage} id="hero" alt="fog forest" width="1920px" height="1080px"/>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar>
                <h1 id="nav-title">Zach Imerzel</h1>
                    <NavItem icon={<Caret />}>
                        <DropdownMenu></DropdownMenu>
                    </NavItem>
                </Navbar>
            </Suspense>
        </div>
    )
}

export default Header;