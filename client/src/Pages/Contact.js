import React, { Component } from 'react';
import '../Header/Header.css'
import '../ImageScroller/ImageScroller.css'
import '../index.css'
import Form from '../Form/Form.js'
import '../Form/Form.css'

class Contact extends Component {
  render() {
    return (
        <div className="fullform">
            <Form />
        </div>
    );
  }
}

export default Contact;
