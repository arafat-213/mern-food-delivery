import { combineReducers } from 'redux'
import { auth } from './auth.reducer'
import { restaurant } from './restaurant.reducer'

export default combineReducers({ auth, restaurant })
