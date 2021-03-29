import { CREATE_ORDER, GET_ORDERS } from './types'
import axios from 'axios'

export const createOrder = (
	restaurant,
	cookingInstructions,
	orderContent
) => async dispatch => {
	try {
		const { data } = await axios.post(`api/order`, {
			restaurant,
			cookingInstructions,
			orderContent
		})
		dispatch({
			type: CREATE_ORDER,
			payload: data
		})
	} catch (error) {}
}

export const getOrders = () => async dispatch => {
	try {
		const { data } = await axios.get(`api/order/?sortBy=createdAt:desc`)
		dispatch({
			type: GET_ORDERS,
			payload: data.orders
		})
	} catch (error) {}
}
