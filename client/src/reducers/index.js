import { combineReducers } from 'redux'
import { auth } from './auth.reducer'
import { restaurant } from './restaurant.reducer'
import {cart} from './cart.reducer'

export default combineReducers({ auth, restaurant, cart })
