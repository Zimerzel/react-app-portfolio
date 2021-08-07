import { Component } from "react"
import {Route, Redirect, BrowserRouter} from "react-router-dom";
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';


class Header extends Component {
    render(){
        return(
            <BrowserRouter basename='ZachImerzelWebDev'>
                <div>
                    <a href= "https://github.com/Zimerzel/react-app-portfolio"><img src="" alt= "" class= "" id="" /></a>
                    <Nav/>
                </div>
            
                <div className="pages">
                    <Route exact path="/" render= {() => (<Redirect to="/portfolio"/>)} />
                    <Route path= "/portfolio" Component={Portfolio}/>
                    <Route path= "/about" Component={About}/>
                    <Route path= "/contact" Component= {Contact}/>
                    <Route path= "/resume" Component= {Resume}/>
                </div>
            </BrowserRouter>
        )
    }

}

export default Header;
