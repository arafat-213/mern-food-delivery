import axios from 'axios'
import {
	AUTH_ERROR,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	SIGNUP_FAILED,
	SIGNUP_SUCCESS,
	USER_LOADED
} from './types'
import setAuthToken from '../utils/setAuthToken'

export const signUp = (
	name,
	email,
	password,
	userType,
	address,
	phone
) => async dispatch => {
	try {
		const res = await axios.post('/api/user/register', {
			name,
			email,
			password,
			userType,
			address,
			phone
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
		const res = await axios.post('user/login', {
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
		const res = await axios.get('user/auth')
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

export const logout = () => async dispatch => {
	dispatch({
		type: LOGOUT
	})
}
