import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CART_ERROR,
	ADD_COOKING_INSTRUCTIONS,
	CLEAR_CART
} from '../actions/types'

const initialState = {
	items: [],
	cookingInstructions: null
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
		case CLEAR_CART:
			return {
				...state,
				items: []
			}
		case ADD_COOKING_INSTRUCTIONS:
			return {
				...state,
				cookingInstructions: payload
			}
		case CART_ERROR:
			// TODO:Display error
			return state
		default:
			return state
	}
}
