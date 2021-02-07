import React, { Fragment } from 'react'

// Bootstrap
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const MenuItem = ({
	menuItem: { itemName, itemPrice, itemDescription, isVeg, isAvailable }
}) => {
	return (
		<Card style={{ width: '100%' }}>
			<Card.Body>
				<Card.Title>{itemName}</Card.Title>
				<Fragment className='d-flex flex-col justify-content-end'>
					<Card.Text>{itemDescription}</Card.Text>
					<Card.Text>{itemPrice}</Card.Text>
				</Fragment>
				<Card.Text>
					is Veg? <span>{isVeg.toString()}</span>
				</Card.Text>
				<Button disabled={!isAvailable}> Add to cart </Button>
			</Card.Body>
		</Card>
	)
}

export default MenuItem
