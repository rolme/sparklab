import { createReducer } from "redux-action"
import axios from 'axios'

export const FETCH = "subscriptions/FETCH"
export const FETCH_FAILURE = "subscriptions/FETCH_FAILURE"
export const FETCH_SUCCESS = "subscriptions/FETCH_SUCCESS"

const initialState = {
  error: '',
  message: '',
  pending: false
}


export const fetchRequest = (data) => {
  return dispatch => {
    dispatch({ type: FETCH })
    axios.post('/api/consultation/', {consultation: data})
      .then(response => {
        if ( response.data.status !== 'error' ) {
          dispatch({ type: FETCH_SUCCESS, payload: response.data })
        } else {
          dispatch({ type: FETCH_FAILURE, payload: response.data })
        }
      })
      .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err.data })
      })
  }
}

export default createReducer(initialState, ({
  [FETCH]: (payload, state) => {
    return {
      ...state,
      error: '',
      message: '',
      pending: true
    }
  },
  [FETCH_SUCCESS]: (payload, state) => {
    return {
      ...state,
      error: '',
      message: 'Thank you!',
      pending: false
    }
  },
  [FETCH_FAILURE]: (payload, state) => {
    const message = !!payload && !!payload.message ? payload.message : 'Something went wrong, please try again!'
    return {
      ...state,
      error: true,
      message: message,
      pending: false
    }
  }
}))