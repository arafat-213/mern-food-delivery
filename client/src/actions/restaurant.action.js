import axios from 'axios'
import {
	GET_RESTAURANTS,
	GET_RESTAURANT,
	RESTAURANT_ERROR,
	ADD_MY_RESTAURANT
} from './types'

export const listRestaurant = () => async dispatch => {
	try {
		console.log('action dispatcher')
		const res = await axios.get('/api/restaurant/list')
		dispatch({
			type: GET_RESTAURANTS,
			payload: res.data.restaurants
		})
	} catch (error) {
		dispatch({
			type: RESTAURANT_ERROR,
			payload: error.response.statusText
		})
	}
}

export const getRestaurantById = id => async dispatch => {
	try {
		const res = await axios.get(`/api/restaurant/${id}`)
		dispatch({
			type: GET_RESTAURANT,
			payload: res.data.restaurant
		})
	} catch (error) {
		dispatch({
			type: RESTAURANT_ERROR,
			payload: error.response.statusText
		})
	}
}

export const addRestaurant = ({
	name,
	address,
	phoneNumber,
	description
}) => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		const body = JSON.stringify({ name, address, phoneNumber, description })

		const res = await axios.post('/api/restaurant', body, config)

		dispatch({
			type: ADD_MY_RESTAURANT,
			payload: res.data.restaurant
		})
		// TODO: Set the new token from response
	} catch (error) {
		dispatch({
			type: RESTAURANT_ERROR,
			payload: error.response.statusText
		})
	}
}
