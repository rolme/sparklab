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
      <div>
        <Navbar id="navbar" className="headerNavBarContainer navbar navbar-expand-lg navbar-light fixed-top">
        <div ref="headerContainer" className="contentContainer">
          <NavLink to="/" className="headerLogo">
            <img src="/assets/images/headerLogo.png" alt="logo"/>
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className='headerNavBarToggler'/>
          <Collapse isOpen={!this.state.collapsed} navbar className="headerNavBar">
            <Col xl={8} lg={8} className="navbar-nav headerCenterMenuItemsContainer mr-auto">
              <a href="#top" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-lin active">Home</a>
              <a href="#services" className="headerMenuItem nav-item nav-link">Services</a>
              <a href="#team" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Team</a>
              <a href="#contactUs" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Contact Us</a>
            </Col>
          </Collapse>
        </div>
      </Navbar>
      </div>

    )
  }
}


