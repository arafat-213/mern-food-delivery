import React, { useEffect } from 'react'

import CustomerOrderList from '../components/Order/CustomerOrderList'

// Redux
import { connect } from 'react-redux'
import { getOrders } from '../actions/order.action'

const Orders = ({ getOrders, loading, user }) => {
	useEffect(() => {
		getOrders()
	}, [getOrders])
	return (
		<div>
			Orders page
			{!loading && user && user.userType === 'customer' && (
				<CustomerOrderList />
			)}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		user: state.auth.user
	}
}

export default connect(mapStateToProps, { getOrders })(Orders)
