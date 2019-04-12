import React from 'react';
import logo from '../image_resource/RUSTLogoVector.svg';
import './Header.css'
import { Link, withRouter } from 'react-router-dom'

import {
  Container, Row, Col, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const Header = () => (
  <header>
    <Navbar fixed="top" color="goodblue" dark expand="xs" className="bg-goodblue" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

        <Col className="d-flex justify-content-xs-start justify-content-lg-start">
          <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
            <img src={logo} alt="logo" className="position-relative img-fluid" />
          </NavbarBrand>
        </Col>

        <Col className="d-flex justify-content-xs-start justify-content-lg-center">
          <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }, {textAlign: "center"}}>
            <p style={{fontFamily: "Myriad Pro"}}>Champlin Park Robotics</p>
          </NavbarBrand>
        </Col>


          <Col className="d-none d-lg-flex justify-content-end">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <Link to="/Contact/">
                    <NavLink className="font-weight-bold" href="/">Contact Us</NavLink>
                </Link>
              </NavItem>

              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>About</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn About RUST</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>What is FIRST Robotics?</DropdownItem>
                  <DropdownItem>2225 RUST</DropdownItem>
                  <DropdownItem>Community Involvement</DropdownItem>
                  <DropdownItem href = "https://github.com/robot-rover/frc2225-2019/" target = "_blank">GitHub</DropdownItem>
                  <DropdownItem href = "https://www.thebluealliance.com/team/2225" target = "_blank">The Blue Alliance</DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default withRouter(Header);
