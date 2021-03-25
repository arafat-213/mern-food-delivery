import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'
import { getOrders } from '../actions/order.action'

const Orders = ({ getOrders }) => {
	useEffect(() => {
		getOrders()
	}, [getOrders])
	return <div>Orders page</div>
}

const mapStateToProps = (state, ownProps) => {
	return {
		orders: state.order.orders
	}
}

export default connect(mapStateToProps, { getOrders })(Orders)
