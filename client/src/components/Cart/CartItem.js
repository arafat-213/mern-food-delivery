import React from 'react'
import { Button } from 'react-bootstrap'

// Bootstrap
import Card from 'react-bootstrap/Card'
const CartItem = ({ item: { itemName, itemPrice } }) => {
	return (
		<Card className='w-100'>
			<Card.Title>{itemName}</Card.Title>
			<Card.Body>
				<Card.Text>Price : {itemPrice}</Card.Text>
				<Button variant='danger'>Remove</Button>
			</Card.Body>
		</Card>
	)
}

export default CartItem
