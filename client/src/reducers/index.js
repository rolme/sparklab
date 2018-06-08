import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import consultation from './consultation'

export default combineReducers({
  consultation,
  router: routerReducer
})
