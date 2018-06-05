import React, { Component } from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'

import { Col } from 'reactstrap'

export default class ImageSlider extends Component {

  renderLeftNav(onClick, disabled) {
    let navigationArrowsPosition = window.innerWidth > 1230 ? (window.innerWidth - 1350) / 2 : 5
    return (
      <img
        src='/assets/images/prev.png'
        alt='sliderLeftNavigation'
        style={{ left: navigationArrowsPosition + "px" }}
        className='homeSliderNavigationButton'
        id='image-gallery-left-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  renderRightNav(onClick, disabled) {
    let navigationArrowsPosition = window.innerWidth > 1230 ? (window.innerWidth - 1350) / 2 : 5
    return (
      <img
        src='/assets/images/next.png'
        alt='sliderRightNavigation'
        style={{ right: navigationArrowsPosition + "px" }}
        className='homeSliderNavigationButton'
        id='image-gallery-left-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  render() {
    const images = [
      {
        renderItem: () => {
          return (
            <div>
              <img src='/assets/images/homeCarouselImage1.jpg' alt="Home Carousel"/>
              <Col className="homeCarouselTextContainer">
                <h4 className="homeCarouselTextHeader">HELPING THE CANNABIS INDUSTRY GROW</h4>
                <p className="homeCarouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </div>
          )
        },
        originalClass: 'homeCarouselImage',
        bulletClass: 'homeSliderNavigationBullet'
      },
      {
        renderItem: () => {
          return (
            <div>
              <img src='/assets/images/homeCarouselImage2.jpg' alt="Home Carousel"/>
              <Col className="homeCarouselTextContainer">
                <h4 className="homeCarouselTextHeader">HELPING THE CANNABIS INDUSTRY GROW</h4>
                <p className="homeCarouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </div>
          )
        },
        originalClass: 'homeCarouselImage',
        bulletClass: 'homeSliderNavigationBullet'
      },
      {
        renderItem: () => {
          return (
            <div>
              <img src='/assets/images/homeCarouselImage3.jpg' alt="Home Carousel"/>
              <Col className="homeCarouselTextContainer">
                <h4 className="homeCarouselTextHeader">HELPING THE CANNABIS INDUSTRY GROW</h4>
                <p className="homeCarouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </div>
          )
        },
        originalClass: 'homeCarouselImage',
        bulletClass: 'homeSliderNavigationBullet'
      },
      {
        renderItem: () => {
          return (
            <div>
              <img src='/assets/images/homeCarouselImage4.jpg' alt="Home Carousel"/>
              <Col className="homeCarouselTextContainer">
                <h4 className="homeCarouselTextHeader">HELPING THE CANNABIS INDUSTRY GROW</h4>
                <p className="homeCarouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </div>
          )
        },
        originalClass: 'homeCarouselImage',
        bulletClass: 'homeSliderNavigationBullet'
      },
      {
        renderItem: () => {
          return (
            <div>
              <img src='/assets/images/homeCarouselImage5.jpg' alt="Home Carousel"/>
              <Col className="homeCarouselTextContainer">
                <h4 className="homeCarouselTextHeader">HELPING THE CANNABIS INDUSTRY GROW</h4>
                <p className="homeCarouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </div>
          )
        },
        originalClass: 'homeCarouselImage',
        bulletClass: 'homeSliderNavigationBullet'
      }
    ];
    return (
      <ImageGallery className='homeCarouselContainer'
                    items={images}
                    showBullets
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    renderLeftNav={this.renderLeftNav}
                    renderRightNav={this.renderRightNav}/>
    )
  }
}

