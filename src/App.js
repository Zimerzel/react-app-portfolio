import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import './index.css';
//Main components
import Navbar from "./components/Nav"
// import NavItem from "./components/NavItem";
// import DropdownMenu from "./components/NavDropdown";
import About from "./components/About";
//About Tabs
import Resume from "./components/aboutComponents/Resume";
// import Portfolio from "./components/aboutComponents/portfolio";
import Contact from "./components/Contact";
//Learn Tabs

//Icons
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import Portfolio from "./components/aboutComponents/Portfolio";
import Thanks from './components/Thanks'





function App() {
  return (
    <Router>
    <>
      <Header />

      <Switch>
        <Route exact path='/' render= {() => (<Redirect to='/about'/>)} />
        <Route exact path='/about' component={About} />
        <Route exact path='/about/portfolio' component={Portfolio} />
        <Route exact path='/about/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/thanks' component={Thanks} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      <Footer />
    </>
    </Router>

  );
}


export default App;
