import axios from 'axios'
import {
	AUTH_ERROR,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	SIGNUP_FAILED,
	SIGNUP_SUCCESS,
	USER_LOADED,
	RESTAURANT_ERROR,
	LOAD_MY_RESTAURANT
} from './types'
import setAuthToken from '../utils/setAuthToken'

export const signup = (
	name,
	email,
	password,
	userType,
	address,
	phoneNumber
) => async dispatch => {
	try {
		const res = await axios.post('/api/user/register', {
			name,
			email,
			password,
			userType,
			address,
			phoneNumber
		})
		dispatch({
			type: SIGNUP_SUCCESS,
			payload: res.data
		})
	} catch (error) {
		dispatch({
			type: SIGNUP_FAILED
		})
	}
}

export const login = (email, password) => async dispatch => {
	try {
		console.log('in login action')
		const res = await axios.post('/api/user/login', {
			email,
			password
		})
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
		setAuthToken(res.data.token)
	} catch (error) {
		dispatch({
			type: LOGIN_FAILED
		})
	}
}

export const loadUser = () => async dispatch => {
	if (localStorage.token) setAuthToken(localStorage.token)
	try {
		const res = await axios.get('/api/user/auth')
		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
	} catch (error) {
		console.error(error)
		dispatch({
			type: AUTH_ERROR
		})
	}
}

export const loadRestaurant = id => async dispatch => {
	try {
		const res = await axios.get(`/api/restaurant/${id}`)

		dispatch({
			type: LOAD_MY_RESTAURANT,
			payload: res.data.restaurant
		})
	} catch (error) {
		console.log(error);
		dispatch({
			type: RESTAURANT_ERROR
		})
	}
}
export const logout = () => async dispatch => {
	dispatch({
		type: LOGOUT
	})
}
