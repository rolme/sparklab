import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { Col, FormGroup, Label, Input, Button, Alert } from 'reactstrap'

import { fetchRequest } from '../../reducers/consultation.js'

class RequestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      capital: '',
      location: '',
      notes: '',
      isLoading: false,
      message: '',
      error: false
    }
    this.handleFieldValueChange = this.handleFieldValueChange.bind(this)
    this.handleSendClick = this.handleSendClick.bind(this)
  }

   componentDidUpdate() {
    const { pending, error, message } = this.props
    if ( pending !== this.state.isLoading || error !== this.state.error || message !== this.state.message ) {
      this.setState({ isLoading: pending, error, message })
    }
  }

  handleFieldValueChange(newValue, name) {
    this.setState({
      [name]: newValue,
    })
  }

  renderLocationSelectFieldOptions() {
    const states = [ "Alaska",
      "Alabama",
      "Arkansas",
      "American Samoa",
      "Arizona",
      "California",
      "Colorado",
      "Connecticut",
      "District of Columbia",
      "Delaware",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Iowa",
      "Idaho",
      "Illinois",
      "Indiana",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Massachusetts",
      "Maryland",
      "Maine",
      "Michigan",
      "Minnesota",
      "Missouri",
      "Mississippi",
      "Montana",
      "North Carolina",
      " North Dakota",
      "Nebraska",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "Nevada",
      "New York",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Virginia",
      "Virgin Islands",
      "Vermont",
      "Washington",
      "Wisconsin",
      "West Virginia",
      "Wyoming" ]
    return states.map((state, index) => {
      return <option key={index}>{state}</option>
    })
  }

  handleSendClick() {
    const { name, email, capital, location, notes } = this.state
    let isValid = true, message = ''
    /*eslint-disable */
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    /*eslint-enable */
    if ( !name || !email || !capital || !location || !notes ) {
      message = 'Please fill in all fields bellow'
      isValid = false
    } else if ( !re.test(email) ) {
      message = 'Please type valid email address'
      isValid = false
    }
    this.setState({ message, error: !isValid })
    isValid && this.props.fetchRequest({ name, email, capital, location, notes })
  }

  render() {
    const { name, email, capital, location, notes, isLoading, error, message } = this.state

    if ( isLoading ) {
      return (
        <div className="consultingSessionRequestFormContainer w-100">
          <div className="contentContainer">
            <div className="spinnerContainer">
              <PropagateLoader
                size={15}
                color={'#1FA7EF'}
                loading={isLoading}
              />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="consultingSessionRequestFormContainer w-100">
        <div className="contentContainer">
          <Col xl={{ size: 8, offset: 2 }} className="d-flex flex-wrap">
            {!!message &&
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-1 px-0">
              <Alert color={error ? 'danger' : 'success'}>
                {message}
              </Alert>
            </Col>
            }
            <Col xl={6} lg={6} md={6}>
              <FormGroup className="formGroup">
                <Label for="name" className="inputFieldLabel">{!!name ? 'Name' : ''}</Label>
                <Input type="text" name="name" id="name" value={name} maxLength="100" placeholder="Name" className="inputField" onChange={(event) => this.handleFieldValueChange(event.target.value, 'name')}/>
              </FormGroup>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <FormGroup className="formGroup">
                <Label for="email" className="inputFieldLabel">{!!email ? 'Email' : ''}</Label>
                <Input type="email" name="email" id="email" value={email} maxLength="100" placeholder="Email" className="inputField" onChange={(event) => this.handleFieldValueChange(event.target.value, 'email')}/>
              </FormGroup>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <FormGroup className="formGroup">
                <Input type="select" name="capitalization" id="capitalization" value={capital} placeholder="Business capitalization" className="selectField" onChange={(event) => this.handleFieldValueChange(event.target.value, 'capital')}>
                  <option value="" disabled>Business capitalization</option>
                  <option>Under 100K</option>
                  <option>100-250K</option>
                  <option>250-500K</option>
                  <option>500K-1M</option>
                  <option>1-5M</option>
                  <option>Over 5M</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <FormGroup className="formGroup">
                <Input type="select" name="location" id="location" value={location} placeholder="Location" className="selectField" onChange={(event) => this.handleFieldValueChange(event.target.value, 'location')}>
                  <option value="" disabled>Location</option>
                  {this.renderLocationSelectFieldOptions()}
                </Input>
              </FormGroup>
            </Col>
            <Col xl={12} lg={12} md={12}>
              <FormGroup className="formGroup mb-0">
                <Label for="notes" className="inputFieldLabel">{!!notes ? 'Additional comments' : ''}</Label>
                <Input type="textarea" name="notes" id="notes" value={notes} maxLength="10000" placeholder="Additional comments" className="inputField" onChange={(event) => this.handleFieldValueChange(event.target.value, 'notes')}/>
              </FormGroup>
            </Col>
            <Col xl={{ size: 4, offset: 4 }} lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm={{ size: 6, offset: 3 }} xs={{ size: 6, offset: 3 }} className="d-flex px-0">
              <Button onClick={this.handleSendClick} className="consultingSessionRequestSendButton submitButton w-100">Send</Button>
            </Col>
          </Col>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pending: state.consultation.pending,
  error: state.consultation.error,
  message: state.consultation.message
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchRequest }, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestForm))
