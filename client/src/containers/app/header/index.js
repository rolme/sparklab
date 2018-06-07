import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Collapse, Navbar, NavbarToggler } from 'reactstrap'

import './index.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar(value) {
    value = (value && typeof(value) === 'boolean') || !this.state.collapsed
    document.body.style.overflowY = !value ? 'hidden' : 'auto'
    this.setState({
      collapsed: value
    })
  }

  render() {
    return (
      <Navbar className="headerNavBarContainer navbar navbar-expand-lg navbar-light fixed-top">
        <div ref="headerContainer" className="contentContainer">
          <NavLink to="/" className="headerLogo">
            <img src="/assets/images/headerLogo.png" alt="logo"/>
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className='headerNavBarToggler'/>
          <Collapse isOpen={!this.state.collapsed} navbar className="headerNavBar">
            <Col xl={8} lg={8} className="navbar-nav headerCenterMenuItemsContainer mr-auto">
              <NavLink to="/" exact={true} onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Home</NavLink>
              <NavLink to="/services" exact={true} onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Services</NavLink>
              <NavLink to="/team" exact={true} onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Team</NavLink>
              <NavLink to="/contactUs" exact={true} onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Contact Us</NavLink>
            </Col>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}


