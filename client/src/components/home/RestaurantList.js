import React from 'react'

// Components
import RestaurantCard from './RestaurantCard'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import CardDeck from 'react-bootstrap/CardDeck'

const RestaurantList = ({ restaurants, loading }) => {
	return (
		!loading && (
			<CardDeck className='mx-0 my-2'>
				{restaurants.map(restaurant => (
					<RestaurantCard
						restaurant={restaurant}
						key={restaurant.id}
					/>
				))}
			</CardDeck>
		)
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		restaurants: state.restaurant.restaurants,
		loading: state.restaurant.loading
	}
}

export default connect(mapStateToProps)(RestaurantList)
