import React from 'react'

// Components
import RestaurantCard from './RestaurantCard'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RestaurantList = ({ restaurants, loading }) => {
	return (
		!loading && (
			<Container fluid>
				<Row>
					{restaurants.map(restaurant => (
						<Col className='my-2' lg={4} md={6} sm={12}>
							<RestaurantCard
								restaurant={restaurant}
								key={restaurant.id}
							/>
						</Col>
					))}
				</Row>
			</Container>
		)
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		restaurants: state.restaurant.restaurants,
		loading: state.restaurant.loading
	}
}

export default connect(mapStateToProps)(RestaurantList)
