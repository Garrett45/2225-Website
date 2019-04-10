import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, email, message} = this.state

        const form = await axios.post('/api/form', {
            fname,
            lname,
            email,
            message
        })


        this.setState({fname: '', lname: '', email: '', message: ''})

    }

  render() {
    return (
    <div>
        <p>Contact Us</p>
      <Form onSubmit={this.handleSubmit} className="form">
      <FormGroup row style={{paddingTop: 30}}>
        <Label for="fname" sm={2}>First Name</Label>
        <Col sm={10}>
          <Input type="text"
                 name="fname"
                 value={this.state.fname}
                 onChange={this.handleChange} />
        </Col>
      </FormGroup>

      <FormGroup row style={{paddingTop: 30}}>
        <Label for="lname" sm={2}>Last Name</Label>
        <Col sm={10}>
          <Input type="text"
                 name="lname"
                 value={this.state.lname}
                 onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup row style={{paddingTop: 30}}>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email"
                   name="email"
                   value={this.state.email}
                   onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row style={{paddingTop: 30}}>
          <Label for="message" sm={2}>Message</Label>
          <Col sm={10}>
            <Input type="textarea"
                   name="message"
                   value={this.state.message}
                   onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row style={{paddingTop: 30}} className="padded">
          <Col sm={{ size: 10, offset: 0 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    );
  }
}
