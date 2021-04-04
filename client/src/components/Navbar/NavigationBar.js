import React from 'react'

import CustomerNavBar from './CustomerNavBar'
import RestaurantNavbar from './RestaurantNavbar'

// Redux
import { connect } from 'react-redux'

const NavigationBar = ({ loading, user }) =>
	!loading && user && user.userType === 'restaurant' ? (
		<RestaurantNavbar />
	) : (
		<CustomerNavBar />
	)

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		user: state.auth.user
	}
}

export default connect(mapStateToProps)(NavigationBar)
