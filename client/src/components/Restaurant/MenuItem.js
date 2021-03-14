import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cart.action'

// Bootstrap
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const MenuItem = ({
	addToCart,
	menuItem: { itemName, itemPrice, itemDescription, isVeg, isAvailable, _id }
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
				<Button disabled={!isAvailable} onClick={() => addToCart(_id)}>
					{' '}
					Add to cart{' '}
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

export default connect(mapStateToProps, { addToCart })(MenuItem)
