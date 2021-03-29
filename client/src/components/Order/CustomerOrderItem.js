import React from 'react'

// Bootstrap
import Card from 'react-bootstrap/Card'

const CustomerOrderItem = ({
	order: {
		orderStatus,
		restaurant: { name, cuisine },
		totalAmount,
		orderContent,
		createdAt
	}
}) => {
	return (
		<Card>
			<Card.Title>
				<div>
					<h3>{name}</h3>
					<h5>{cuisine.toString()}</h5>
					<h3>Total amount : {`${totalAmount} rs`}</h3>
				</div>
			</Card.Title>
			<Card.Body>
				<p>Order status: {orderStatus}</p>
				<p>items:</p>
				{orderContent.map(item => (
					<div>
						<p>
							{item.itemName} : {item.itemPrice} rs
						</p>
					</div>
				))}
			</Card.Body>
			<Card.Footer>
				<p>Ordered on {createdAt}</p>
				<p>Repeat order</p>
			</Card.Footer>
		</Card>
	)
}

export default CustomerOrderItem
