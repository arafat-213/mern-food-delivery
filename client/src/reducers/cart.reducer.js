import { ADD_TO_CART, REMOVE_FROM_CART, CART_ERROR } from '../actions/types'

const initialState = {
	items: []
}

export const cart = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_TO_CART:
			// TODO: avoid item duplication
			return {
				...state,
				items: [...state.items, payload]
			}
		case REMOVE_FROM_CART:
			return {
				...state,
				items: state.items.filter(item => item._id !== payload)
			}
		case CART_ERROR:
			// TODO:Display error
			return state
		default:
			return state
	}
}
