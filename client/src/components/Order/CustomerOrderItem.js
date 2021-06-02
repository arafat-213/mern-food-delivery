import React from 'react'
import moment from 'moment'

// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CustomerOrderItem = ({
	order: {
		orderStatus,
		restaurant: { name },
		totalAmount,
		orderContent,
		createdAt
	}
}) => {
	const getOrderStautsBadge = orderStatus => {
		switch (orderStatus) {
			case 'W':
				return (
					<Button variant='outline-warning' disabled>
						Waiting for restuarant to confirm your order!
					</Button>
				)
			case 'A':
				return (
					<Button variant='outline-success' disabled>
						Restaurant has accepted your order!
					</Button>
				)

			case 'R':
				return (
					<Button variant='outline-danger' disabled>
						Restaurant has rejected your order!
					</Button>
				)
			case 'I':
				return (
					<Button variant='outline-primary' disabled>
						Your order is being prepared!
					</Button>
				)
			case 'O':
				return (
					<Button disabled variant='outline-info'>
						Your order is on the way!
					</Button>
				)
			case 'D':
				return (
					<Button disabled variant='outline-secondary'>
						Your order has been delivered
					</Button>
				)
			default:
				return (
					<Button disabled variant='outline-danger'>
						Order status unavailable.
					</Button>
				)
		}
	}

	return (
		<Card>
			<Card.Title>
				<div className='d-flex justify-content-between'>
					<h3 className='p-1'>{name}</h3>
					{getOrderStautsBadge(orderStatus)}
				</div>
			</Card.Title>
			<Card.Body className='p-2'>
				{orderContent.map(item => (
					<div>
						<p className='py-0 my-0'>
							{item.itemName} : {item.itemPrice.toFixed(2)}{' '}
							&#x20B9;
						</p>
					</div>
				))}
				<h5>Total amount : {`${totalAmount.toFixed(2)}`} &#x20B9;</h5>
			</Card.Body>
			<Card.Footer className='border-top-0 p-2'>
				<p className='mb-1'>
					{' '}
					Ordered on {moment(createdAt).format('LLL')}
				</p>
				<p className='mb-0'>
					<i class='fas fa-redo'></i> Repeat order
				</p>
			</Card.Footer>
		</Card>
	)
}

export default CustomerOrderItem
