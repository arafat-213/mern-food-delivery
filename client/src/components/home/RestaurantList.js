import React from 'react'

// Components
import RestaurantCard from './RestaurantCard'

// Redux
import { connect } from 'react-redux'

const RestaurantList = ({ restaurants, loading }) => {
	return (
		!loading &&
		restaurants.map(restaurant => (
			<RestaurantCard restaurant={restaurant} key={restaurant.id} />
		))
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		restaurants: state.restaurant.restaurants,
		loading: state.restaurant.loading
	}
}

export default connect(mapStateToProps)(RestaurantList)
