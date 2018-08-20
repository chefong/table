import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

const logo = require('../assets/imgs/table logo full name.png');

class Welcome extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="navbarbrand">
            <NavLink to="/"><img src={logo} alt="table logo" id="table-logo"/></NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="toggle-button"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" className="navlink">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="navlink">Mission</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="navlink">Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="navlink rightnav">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Welcome;