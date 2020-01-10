import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import Home from './components/home/home'
import AboutUs from './components/aboutus/aboutus';
import ContactUs from './components/contactus/contactus';
import Projects from './components/projects/projects';
import Careers from './components/careers/careers';
import ApiCall from './components/ApiCall/ApiCall'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home </Link></li>
          <li><Link to="/aboutus">About Us </Link></li>
          <li><Link to="/contactus">Contact Us </Link></li>
          <li><Link to="/login">Login </Link></li>
          <li><Link to="/careers">Careers </Link></li>
          <li><Link to="/apicall"> Api Demo </Link></li>
        </ul>
    </nav>
    <hr/>

    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/login" component={Projects}/>
        <Route exact path="/careers" component={Careers}/>
        <Route exact path="/apicall" component={ApiCall}/>
    </Switch>

    </div>
  );
}

export default App;
