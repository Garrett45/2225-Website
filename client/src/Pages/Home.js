import React, { Component } from 'react';
import '../Header/Header.css'
import ImageScroller from '../ImageScroller/ImageScroller.js'
import '../ImageScroller/ImageScroller.css'

class Home extends Component {
  render() {
    return (
        <div className="carouselouter">
          <ImageScroller />
        </div>
    );
  }
}

export default Home;
