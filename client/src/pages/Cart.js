import React from 'react'

import CartItem from '../components/Cart/CartItem'
import EmptyCart from '../components/Cart/EmptyCart'

// Redux
import { connect } from 'react-redux'
import PriceDetails from '../components/Cart/PriceDetails'

const Cart = ({ items }) => {
	let totalPrice = 0
	const calculateTotalPrice = () => {
		items.forEach(item => (totalPrice += item.itemPrice))
		return totalPrice
	}
	return items.length === 0 ? (
		<EmptyCart />
	) : (
		<div>
			<h1>Cart</h1>
			{items.map(item => (
				<CartItem item={item} />
			))}
			<PriceDetails totalPrice={calculateTotalPrice()} />
		</div>
	)
	// TODO: add place order button and total amount
}

const mapStateToProps = (state, ownProps) => {
	return {
		items: state.cart.items
	}
}

export default connect(mapStateToProps)(Cart)
