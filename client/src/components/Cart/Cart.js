import React from 'react'

import CartItem from './CartItem'
// Redux
import { connect } from 'react-redux'

const Cart = ({ cart }) => {
	return (
		<div>
			<h1>Cart</h1>
			{cart.map(item => (
				<CartItem item={item} />
			))}
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(Cart)
