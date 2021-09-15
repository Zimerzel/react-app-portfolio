import React from 'react'
import Navbar from './Nav'
import NavItem from "./NavItem";
import DropdownMenu from "./NavDropdown";
import { ReactComponent as Caret } from '../icons/caret.svg'
import heroImage from '../assets/images/hero-bg.jpg'


function Header() {
    return(
        <div id="header">
            <div>
                <div className="fogwrapper">
                    <div id="foglayer_01" class="fog">
                        <div class="image01"></div>
                        <div class="image02"></div>
                    </div>
                    <div id="foglayer_02" class="fog">
                        <div class="image01"></div>
                        <div class="image02"></div>
                    </div>
                    <div id="foglayer_03" class="fog">
                        <div class="image01"></div>
                        <div class="image02"></div>
                    </div>
                </div>
            </div>
            <div id="header">
                <img src={heroImage} id="hero" alt="fog forest"/>
            </div>
            <Navbar>
            <h1 id="nav-title">Zach Imerzel</h1>
                <NavItem icon={<Caret />}>
                    <DropdownMenu></DropdownMenu>
                </NavItem>
            </Navbar>
        </div>
    )
}

export default Header;