import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeFromCart } from '../../actions/cart.action'

// Bootstrap
import Card from 'react-bootstrap/Card'
const CartItem = ({ removeFromCart, item: { itemName, itemPrice, _id } }) => {
	return (
		<Card className='w-100'>
			<Card.Title>{itemName}</Card.Title>
			<Card.Body>
				<Card.Text>Price : {itemPrice}</Card.Text>
				<Button variant='danger' onClick={() => removeFromCart(_id)}>
					Remove
				</Button>
			</Card.Body>
		</Card>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		prop: state.prop
	}
}

export default connect(mapStateToProps, { removeFromCart })(CartItem)
