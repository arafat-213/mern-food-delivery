import React from 'react'

import CartItem from '../components/Cart/CartItem'
import EmptyCart from '../components/Cart/EmptyCart'

// Redux
import { connect } from 'react-redux'

const Cart = ({ items }) =>
	items.length === 0 ? (
		<EmptyCart />
	) : (
		<div>
			<h1>Cart</h1>
			{items.map(item => (
				<CartItem item={item} />
			))}
		</div>
		// TODO: add place order button and total amount
	)

const mapStateToProps = (state, ownProps) => {
	return {
		items: state.cart.items
	}
}

export default connect(mapStateToProps)(Cart)
