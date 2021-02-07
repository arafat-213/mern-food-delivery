import React, { useEffect } from 'react'

import Menu from '../components/Restaurant/Menu'
//Redux
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../actions/restaurant.action'

const Restaurant = ({ getRestaurantById, restaurant }) => {
	let params = useParams()
	useEffect(() => {
		getRestaurantById(params.id)
	}, [])

	return restaurant ? (
		<div>
			<h1>{restaurant.name}</h1>
			<Menu menu={restaurant.menu} />
		</div>
	) : (
		<span>Loading...</span>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		restaurant: state.restaurant.restaurant
	}
}
export default connect(mapStateToProps, { getRestaurantById })(Restaurant)
