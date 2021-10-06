import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import Thanks from './components/Thanks';

//Main components
import Header from './components/Header';
// import Footer from "./components/Footer";
import About from "./components/About";
import './index.css';

//About Tabs

// import Resume from "./components/aboutComponents/Resume";
const Resume = React.lazy(() => import('./components/aboutComponents/Resume'))

// import Portfolio from "./components/aboutComponents/portfolio";
const Portfolio = React.lazy(() => import('./components/aboutComponents/Portfolio'))

// import Contact from "./components/Contact";
const Contact = React.lazy(() => import('./components/Contact'))
//Learn Tabs






function App() {
  return (
    <Router>
    <>
      <Header />

      <Switch>
        <Route exact path='/' render= {() => (<Redirect to='/about'/>)} />
        <Route exact path='/about' component={About} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/about/portfolio' component={Portfolio} />
            <Route exact path='/about/resume' component={Resume} />
            <Route exact path='/contact' component={Contact} />
          </Suspense>
        <Route exact path='/thanks' component={Thanks} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      {/* <Footer /> */}
    </>
    </Router>

  );
}


export default App;
