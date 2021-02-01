import {
	GET_RESTAURANTS,
	GET_RESTAURANT,
	RESTAURANT_ERROR
} from '../actions/types'

const initialState = {
	restaurant: null,
	restaurants: [],
	loading: true,
	error: null
}

export const restaurant = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_RESTAURANTS:
			return {
				...state,
				loading: false,
				restaurants: payload
			}
		case GET_RESTAURANT:
			return {
				...state,
				loading: false,
				restaurant: payload
			}
		case RESTAURANT_ERROR:
			return {
				...state,
				loading: false,
				error: payload
			}
		default:
			return state
	}
}
