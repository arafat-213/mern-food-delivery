import React from 'react'

import CartItem from '../components/Cart/CartItem'
import EmptyCart from '../components/Cart/EmptyCart'
import PriceDetails from '../components/Cart/PriceDetails'

// Redux
import { connect } from 'react-redux'
import { createOrder, getOrders } from '../actions/order.action'

// Bootstrap
import Button from 'react-bootstrap/Button'
import CookingInstructions from '../components/Cart/CookingInstructions'
import RestaurantHeader from '../components/Restaurant/RestaurantHeader'

const Cart = ({
	items,
	restaurant,
	cookingInstructions,
	createOrder,
	getOrders
}) => {
	let totalPrice = 0
	const calculateTotalPrice = () => {
		getOrders()
		items.forEach(item => (totalPrice += item.itemPrice))
		return totalPrice
	}

	const submitOrder = e => {
		e.preventDefault()
		const orderContent = items.map(item => item._id)
		createOrder(restaurant._id, cookingInstructions, orderContent)
	}
	return items.length === 0 ? (
		<EmptyCart />
	) : (
		<div>
			<RestaurantHeader restaurant={restaurant} />
			<h1>Cart</h1>
			{items.map(item => (
				<CartItem item={item} />
			))}
			<PriceDetails totalPrice={calculateTotalPrice()} />
			<CookingInstructions />
			<Button
				variant='success'
				className='w-25 p-2'
				onClick={submitOrder}>
				{' '}
				Place order TODO: Add order action/reducer
			</Button>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		items: state.cart.items,
		cookingInstructions: state.cart.cookingInstructions,
		restaurant: state.restaurant.restaurant
	}
}

export default connect(mapStateToProps, { createOrder, getOrders })(Cart)
