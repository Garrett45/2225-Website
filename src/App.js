import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navigator from './Navigator/Navigator.js'
import './Navigator/Navigator.css'
import Images from './Images/Images.js'
import './Images/Images.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="background">
        <div className="App">
          <Navigator />
        </div>
        <div className="carouselouter">
          <div className ="carouselinner">
          <Images />
          </div>
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
