import React from 'react'
import { PropagateLoader } from 'react-spinners'

export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>
    } else if (props.pastDelay) {
      return <div className="spinnerContainer"><PropagateLoader size={15} color={'#1FA7EF'} loading={true}/></div>
    } else {
      return null
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>
  } else {
    return null
  }
}