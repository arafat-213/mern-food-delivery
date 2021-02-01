import React, { useEffect } from 'react'
import RestaurantList from '../components/home/RestaurantList'
// Redux
import { connect } from 'react-redux'
import { listRestaurant } from '../actions/restaurant.action'

const Home = ({ loading, listRestaurant }) => {
	useEffect(() => {
		listRestaurant()
	}, [])

	return !loading && <RestaurantList />
}

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.restaurant.loading
	}
}

export default connect(mapStateToProps, { listRestaurant })(Home)
