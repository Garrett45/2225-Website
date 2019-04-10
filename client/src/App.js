import React, { Component } from 'react';
import Header from './Header/Header.js'
import './Header/Header.css'
import './ImageScroller/ImageScroller.css'
import './index.css'
import Home from './Pages/Home.js'
import { Switch, Route } from 'react-router'
import Contact from './Pages/Contact.js'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <div className="Header">
              <Header />
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/Contact/" component = {Contact} />
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
