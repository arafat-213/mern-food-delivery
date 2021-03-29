import { CREATE_ORDER, GET_ORDERS } from '../actions/types'

const initialState = {
	orders: [],
	loading: true
}

export const order = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case CREATE_ORDER:
			// TODO: show a success message
			return state
		case GET_ORDERS:
			return {
				...state,
				loading: false,
				orders: payload
			}
		default:
			return state
	}
}
