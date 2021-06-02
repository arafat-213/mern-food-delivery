import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeFromCart } from '../../actions/cart.action'

// Bootstrap
import Card from 'react-bootstrap/Card'

const CartItem = ({ removeFromCart, item: { itemName, itemPrice, _id } }) => {
	return (
		<Card className='my-2 px-2'>
			<div className='d-flex align-content-center justify-content-between'>
				<div>
					<Card.Title>{itemName}</Card.Title>
					<Card.Text>Price : {itemPrice}</Card.Text>
				</div>
				<div>
					<Button
						variant='danger'
						onClick={() => removeFromCart(_id)}>
						<i class='fas fa-minus-circle'></i>
					</Button>
				</div>
			</div>
		</Card>
	)
}

const mapStateToProps = state => {
	return {
		prop: state.prop
	}
}

export default connect(mapStateToProps, { removeFromCart })(CartItem)
