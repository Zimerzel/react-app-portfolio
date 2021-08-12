import React, { Component } from "react"
import {Route, Redirect, BrowserRouter} from "react-router-dom";
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import heroImage from '../../assets/images/hero-bg.jpg'


class Header extends Component {
    render(){
        return(
            <BrowserRouter basename='ZachImerzelWebDev'>
                <div>
                    <a href= "https://github.com/Zimerzel/react-app-portfolio/"><img src={heroImage} /></a>
                    <Nav/>
                </div>
            
                <div className="pages">
                    <Route exact path="/" render= {() => (<Redirect to="/about"/>)} />
                    <Route path= "/portfolio" component={Portfolio}/>
                    <Route path= "/about" component={About}/>
                    <Route path= "/contact" component= {Contact}/>
                    <Route path= "/resume" component= {Resume}/>
                </div>

            </BrowserRouter>

        )
    }

}

export default Header;
