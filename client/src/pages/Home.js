import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'
import { listRestaurant } from '../actions/restaurant.action'

const Home = ({ restaurant, listRestaurant }) => {
	useEffect(() => {
		listRestaurant()
	}, [])

	return <div></div>
}

const mapStateToProps = (state, ownProps) => {
	return {
		restaurant: state.restaurant
	}
}

export default connect(mapStateToProps, { listRestaurant })(Home)
