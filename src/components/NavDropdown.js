import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as Caret } from '../icons/caret.svg'
import { ReactComponent as Messenger } from '../icons/messenger.svg'
import { CSSTransition } from "react-transition-group"
import { ReactComponent as  Arrow} from '../icons/arrow.svg'
import { ReactComponent as  Home} from '../icons/home.svg'
import { ReactComponent as  Article} from '../icons/article.svg'
import { ReactComponent as  Work} from '../icons/work.svg'
import { ReactComponent as  User} from '../icons/user.svg'

function DropdownMenu () {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
    
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem (props){
        return(
            <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                    {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        )
    }
    return(
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition 
                in={activeMenu === 'main'} unmountOnExit
                timeout={500} 
                classNames="menu-primary" 
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon={<Home />}
                    >
                        <Link to="/about">Home</Link>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<Caret />}
                        goToMenu="about">
                            <Link to="/about">About</Link>
                    </DropdownItem>
                    <DropdownItem
                        href ="/contact"
                        leftIcon={<Messenger />}
                        goToMenu="main">
                            <Link to="/contact">Contact</Link>
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'about'} 
                unmountOnExit
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<Arrow />} goToMenu="main" />
                    <DropdownItem leftIcon={<User />}>
                       <Link to="/about">About Me</Link>
                    </DropdownItem>
                    <DropdownItem leftIcon={<Article />}>
                       <Link to="/about/resume">Resume</Link>
                    </DropdownItem>
                    <DropdownItem leftIcon={<Work />}>
                       <Link to="/about/portfolio">Portfolio</Link>
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu;