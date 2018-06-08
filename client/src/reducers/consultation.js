import { createReducer } from "redux-action"
import axios from 'axios'

export const CREATE = "subscriptions/CREATE"
export const CREATE_FAILURE = "subscriptions/CREATE_FAILURE"
export const CREATE_SUCCESS = "subscriptions/CREATE_SUCCESS"

const initialState = {
  error: '',
  message: '',
  pending: false
}


export const fetchRequest = (data) => {
  return dispatch => {
    dispatch({ type: CREATE })
    axios.post('/api/consultations/', {consultation: data})
      .then(response => {
        if ( response.data.status !== 'error' ) {
          dispatch({ type: CREATE_SUCCESS, payload: response.data })
        } else {
          dispatch({ type: CREATE_FAILURE, payload: response.data })
        }
      })
      .catch(err => {
        dispatch({ type: CREATE_FAILURE, payload: err.data })
      })
  }
}

export default createReducer(initialState, ({
  [CREATE]: (payload, state) => {
    return {
      ...state,
      error: '',
      message: '',
      pending: true
    }
  },
  [CREATE_SUCCESS]: (payload, state) => {
    return {
      ...state,
      error: '',
      message: 'Thank you!',
      pending: false
    }
  },
  [CREATE_FAILURE]: (payload, state) => {
    const message = !!payload && !!payload.message ? payload.message : 'Something went wrong, please try again!'
    return {
      ...state,
      error: true,
      message: message,
      pending: false
    }
  }
}))