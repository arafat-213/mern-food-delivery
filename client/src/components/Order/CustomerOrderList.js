import React from 'react'

// Redux
import { connect } from 'react-redux'
import CustomerOrderItem from './CustomerOrderItem'

const CustomerOrderList = ({ orders, loading }) =>
	loading ? (
		<p> orders loading </p>
	) : (
		<div>
			{orders.map(order => (
				<CustomerOrderItem order={order} />
			))}
		</div>
	)

const mapStateToProps = (state, ownProps) => {
	return {
		orders: state.order.orders,
		loading: state.order.loading
	}
}

export default connect(mapStateToProps)(CustomerOrderList)
