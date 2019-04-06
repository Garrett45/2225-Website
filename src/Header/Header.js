import React from 'react';
import logo from '../image_resource/RUSTLogoVector.svg';
import './Header.css'

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
  <header>
    <Navbar fixed="top" color="goodblue" dark expand="xs" className="border-bottom border-gray bg-goodblue" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

        <Col className="d-flex justify-content-xs-start justify-content-lg-start">
          <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
            <img src={logo} alt="logo" className="position-relative img-fluid" />
          </NavbarBrand>
        </Col>


          <Col className="d-none d-lg-flex justify-content-end">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Contact Us</NavLink>
              </NavItem>

              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>About</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Documentation</DropdownItem>
                  <DropdownItem>Tutorials</DropdownItem>
                  <DropdownItem>Courses</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;
