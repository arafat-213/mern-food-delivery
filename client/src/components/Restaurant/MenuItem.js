import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cart.action'

// Bootstrap
import Card from 'react-bootstrap/Card'
import { Button, Row, Col, Badge } from 'react-bootstrap'
const MenuItem = ({
	addToCart,
	menuItem: { itemName, itemPrice, itemDescription, isVeg, isAvailable, _id }
}) => {
	const badgeColor = isVeg ? 'success' : 'danger'
	return (
		<Card>
			<Row className='no-gutters'>
				<Col xs={5}>
					<Card.Img
						variant='top'
						className='menu-item-img'
						src='https://etimg.etb2bimg.com/photo/75161189.cms'
					/>
					<div className='card-img-overlay p-0 text-left'>
						<Badge pill variant={badgeColor}>
							&bull;
						</Badge>
					</div>
				</Col>
				<Col xs={7}>
					<Card.Body>
						<Card.Text>
							<p className='h4 pb-0'>{itemName}</p>
							<p className='pb-0 h6 text-secondary'>
								{itemDescription}
							</p>
							<p className='h5 text-dark'>&#x20B9;{itemPrice}</p>
						</Card.Text>
						<Button
							variant='outline-success'
							disabled={!isAvailable}
							onClick={() => addToCart(_id)}>
							{isAvailable ? 'Add to Cart' : 'Item not available'}
						</Button>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		prop: state.prop
	}
}

export default connect(mapStateToProps, { addToCart })(MenuItem)
