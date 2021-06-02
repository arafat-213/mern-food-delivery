import React from 'react'
import { Redirect } from 'react-router-dom'

import CartItem from '../components/Cart/CartItem'
import EmptyCart from '../components/Cart/EmptyCart'
import PriceDetails from '../components/Cart/PriceDetails'

// Redux
import { connect } from 'react-redux'
import { createOrder } from '../actions/order.action'
import { clearCart } from '../actions/cart.action'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Containter from 'react-bootstrap/Container'

// Components
import CookingInstructions from '../components/Cart/CookingInstructions'
import RestaurantHeader from '../components/Restaurant/RestaurantHeader'
import { Link } from 'react-router-dom'

const Cart = ({
	items,
	restaurant,
	cookingInstructions,
	createOrder,
	clearCart,
	isAuthenticated
}) => {
	let totalPrice = 0
	const calculateTotalPrice = () => {
		items.forEach(item => (totalPrice += item.itemPrice))
		return totalPrice
	}

	const submitOrder = e => {
		e.preventDefault()
		const orderContent = items.map(item => item._id)
		createOrder(restaurant._id, cookingInstructions, orderContent)
		clearCart()
		return <Redirect to='/orders' />
	}
	return items.length === 0 ? (
		<EmptyCart />
	) : (
		<Containter>
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
				disabled={!isAuthenticated}
				onClick={submitOrder}>
				{' '}
				Place order
			</Button>
			{!isAuthenticated && (
				<p className='mt-2'>
					You need to sign in first to place the order. Click{' '}
					<Link to='/login'>here</Link> to sign in
				</p>
			)}
		</Containter>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		items: state.cart.items,
		cookingInstructions: state.cart.cookingInstructions,
		restaurant: state.restaurant.restaurant,
		isAuthenticated: state.auth.isAuthenticated
	}
}

export default connect(mapStateToProps, { createOrder, clearCart })(Cart)
