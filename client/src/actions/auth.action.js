import axios from 'axios'
import {
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	SIGNUP_FAILED,
	SIGNUP_SUCCESS
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
