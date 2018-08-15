import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'

import './index.css'

import Scrollspy from 'react-scrollspy'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      currentSection: 'home'
    };
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.scrollToSection = this.scrollToSection.bind(this)
  }

  toggleNavbar(value) {
    value = (value && typeof(value) === 'boolean') || !this.state.collapsed
    document.body.style.overflowY = !value ? 'hidden' : 'auto'
    this.setState({
      collapsed: value
    })
  }

  scrollToSection(event, sectionName) {
    const scrollNode = document.getElementById(sectionName)
    setTimeout(() => window.scrollTo(0, !!scrollNode ? scrollNode.offsetTop : 0), !event ? 500 : 0)
    this.toggleNavbar(true)
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
            <Scrollspy componentTag='div' items={[ 'home', 'services', 'team', 'contact' ]} currentClassName="active" className="col-xl-8 col-lg-8 navbar-nav headerCenterMenuItemsContainer mr-auto">
              <a href="#home" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Home</a>
              <a href="#services" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Services</a>
              <a href="#team" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Team</a>
              <a href="#contact" onClick={() => this.toggleNavbar(true)} className="headerMenuItem nav-item nav-link">Contact Us</a>
            </Scrollspy>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}


