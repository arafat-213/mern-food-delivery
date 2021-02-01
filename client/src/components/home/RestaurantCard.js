import React from 'react'
import { Link } from 'react-router-dom'
//Bootstrap
import Card from 'react-bootstrap/Card'

const RestaurantCard = ({ restaurant: { name, cuisine, id } }) => {
	return (
		<Link to={`/restaurant/${id}`}>
			<Card style={{ width: '16rem' }}>
				<Card.Img
					variant='top'
					src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2012%2F04%2Fimages-sys-201110-a-low-calorie-meals.jpg'
				/>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						{cuisine && cuisine.length > 0
							? cuisine.toString()
							: 'Just Food'}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	)
}

export default RestaurantCard
