import React, { Component } from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import { Col } from 'reactstrap'

import ImageSlider from './imageSlider'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div data-spy="scroll" data-target="#navbar" data-offset="0" className="homeContainer">
        <ImageSlider id="top"/>
        <Col className="homePageSectionContainer">
          <p className="homePageSectionHeader">What is Spark Lab?</p>
          <div className="homePageSectionUnderHeaderLine"/>
          <div className="contentContainer">
            <Col xl={{ size: 8, offset: 2 }} className="homePageSectionContentPartContainer">
              <p className="whatIsPartText">Spark Lab provides best of industry solutions for your companies specific technology needs. Our thorough review of existing solutions as well as a clear understanding of the cannabis industry’s needs allows us to design and implement the best system for your operation.</p>
            </Col>
          </div>
        </Col>
        <Col id="services" className="homePageSectionContainer homePageServicesSectionContainer bg-white">
          <p className="homePageSectionHeader">Services</p>
          <div className="homePageSectionUnderHeaderLine"/>
          <div className="contentContainer">
            <Col xl={{ size: 12, offset: 0 }} lg={{ size: 12, offset: 0 }} md={{ size: 12, offset: 0 }} sm={{ size: 12, offset: 0 }} xs={{ size: 12, offset: 0 }} className="homePageSectionContentPartContainer">
              <Col xl={{ size: 4, offset: 0 }} className='d-flex flex-column align-items-center servicePointContainer'>
                <img src='/assets/images/research.png' alt="Research" className="servicePointIcon"/>
                <p className="servicePointHeader">Research</p>
                <p className="servicePointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
              <Col xl={{ size: 4, offset: 0 }} className='d-flex flex-column align-items-center servicePointContainer'>
                <img src='/assets/images/clipboard.png' alt="Research" className="servicePointIcon"/>
                <p className="servicePointHeader">Requirements</p>
                <p className="servicePointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
              <Col xl={{ size: 4, offset: 0 }} className='d-flex flex-column align-items-center servicePointContainer'>
                <img src='/assets/images/vector.png' alt="Research" className="servicePointIcon"/>
                <p className="servicePointHeader">Design</p>
                <p className="servicePointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
              <Col xl={{ size: 4, offset: 0 }} className='d-flex flex-column align-items-center servicePointContainer'>
                <img src='/assets/images/cogwheel.png' alt="Research" className="servicePointIcon"/>
                <p className="servicePointHeader">Implementation</p>
                <p className="servicePointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
              <Col xl={{ size: 4, offset: 0 }} className='d-flex flex-column align-items-center servicePointContainer'>
                <img src='/assets/images/brain.png' alt="Research" className="servicePointIcon"/>
                <p className="servicePointHeader">Management</p>
                <p className="servicePointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </Col>
          </div>
        </Col>
        <Col id="team" className="homePageSectionContainer">
          <p className="homePageSectionHeader">Team</p>
          <div className="homePageSectionUnderHeaderLine"/>
          <div className="contentContainer">
            <Col xl={{ size: 8, offset: 2 }} className="homePageSectionContentPartContainer">
              <p className="teamPartText">The Spark Lab team of analysts, software architects, and system engineers is comprised of IT management veterans, operations specialists, and other industry experts. Our team is ready to engage with companies ready to take their business to the next level.</p>
              <Col xl={{ size: 12, offset: 0 }} className="d-flex flex-wrap">
                <Col className="d-flex flex-column align-items-center">
                  <div className="teamMemberAvatar ronAvatar"/>
                  <p className="teamMemberName">Ron Parnaso</p>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                  <div className="teamMemberAvatar randyAvatar"/>
                  <p className="teamMemberName">Randy Hamilton</p>
                </Col>
              </Col>
            </Col>
          </div>
        </Col>
      </div>
    )
  }
}

export default Home
