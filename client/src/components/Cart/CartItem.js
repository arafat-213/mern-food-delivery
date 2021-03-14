import React from 'react'
import { Button } from 'react-bootstrap'

// Bootstrap
import Card from 'react-bootstrap/Card'
const CartItem = ({ item: { name, price } }) => {
	return (
		<Card className='w-100'>
			<Card.Title>{name}</Card.Title>
			<Card.Body>
				<Card.Text>Price : {price}</Card.Text>
				<Button variant='danger'>Remove</Button>
			</Card.Body>
		</Card>
	)
}

export default CartItem
