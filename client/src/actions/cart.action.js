import axios from 'axios'
import {
	CART_ERROR,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADD_COOKING_INSTRUCTIONS
} from './types'

export const addToCart = (id, qty) => async dispatch => {
	try {
		// TODO: quantity!
		const { data } = await axios.get(`/api/menu/${id}`)
		dispatch({
			type: ADD_TO_CART,
			payload: data.menuItem
		})
	} catch (error) {}
}

export const removeFromCart = id => async dispatch => {
	dispatch({
		type: REMOVE_FROM_CART,
		payload: id
	})
}

export const addCookingInstructions = cookingInstructions => dispatch => {
	dispatch({
		type: ADD_COOKING_INSTRUCTIONS,
		payload: cookingInstructions
	})
}
