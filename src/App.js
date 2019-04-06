import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header/Header.js'
import './Header/Header.css'
import Images from './Images/Images.js'
import './Images/Images.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="background">
        <div className="App">
          <Header />
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
