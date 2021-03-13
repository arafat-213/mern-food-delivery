import React from 'react'

// Bootstrap
import Card from 'react-bootstrap/Card'

const RestaurantHeader = ({
	restaurant: { name, address, phoneNumber, description, cuisine }
}) => {
	return (
		<Card className='w-100'>
			<Card.Title>
				{' '}
				<h1>{name}</h1>
			</Card.Title>
			<Card.Body>
				{address && <Card.Text>Address: {address}</Card.Text>}
				{phoneNumber && (
					<Card.Text>phoneNumber:{phoneNumber}</Card.Text>
				)}
				{description && (
					<Card.Text>description: {description}</Card.Text>
				)}
				{cuisine.length > 0 && (
					<Card.Text>Cuisine: {cuisine.toString()}</Card.Text>
				)}
			</Card.Body>
		</Card>
	)
}

export default RestaurantHeader
