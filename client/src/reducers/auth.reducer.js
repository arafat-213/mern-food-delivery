import {
	AUTH_ERROR,
	LOAD_MY_RESTAURANT,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	SIGNUP_FAILED,
	SIGNUP_SUCCESS,
	USER_LOADED
} from '../actions/types'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: true,
	user: null,
	restaurant: null
}

export const auth = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload.user
			}
		case SIGNUP_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token)
			return {
				...state,
				token: payload.token,
				isAuthenticated: true,
				loading: false,
				user: payload.user
			}
		case LOGIN_FAILED:
		case SIGNUP_FAILED:
		case LOGOUT:
		case AUTH_ERROR:
			localStorage.removeItem('token')
			return {
				...state,
				isAuthenticated: false,
				token: null,
				loading: false,
				user: null
			}
		case LOAD_MY_RESTAURANT:
			return {
				...state,
				restaurant: payload,
				loading: false
			}
		default:
			return state
	}
}
