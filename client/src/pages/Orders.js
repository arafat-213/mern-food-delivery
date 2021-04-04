import React, { useEffect } from 'react'

import CustomerOrderList from '../components/Order/CustomerOrderList'

// Redux
import { connect } from 'react-redux'
import { getOrders } from '../actions/order.action'

const Orders = ({ getOrders, loading, userType }) => {
	useEffect(() => {
		getOrders()
	}, [getOrders])
	return (
		<div>
			Orders page
			{!loading && userType === 'customer' && <CustomerOrderList />}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		userType: state.auth.user.userType
	}
}

export default connect(mapStateToProps, { getOrders })(Orders)
