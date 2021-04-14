import React from 'react'
import { Link } from 'react-router-dom'
//Bootstrap
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

const RestaurantCard = ({ restaurant: { name, cuisine, id } }) => {
	let ratings = Math.floor(Math.random() * 6)

	const ratingsClass =
		ratings > 3.5 ? 'success' : ratings > 2.5 ? 'warning' : 'danger'
	return (
		<Card>
			<Card.Img
				variant='top'
				src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2012%2F04%2Fimages-sys-201110-a-low-calorie-meals.jpg'
			/>
			<Card.Body className='pb-0'>
				<Link to={`/restaurant/${id}`} className='text-decoration-none'>
					<Card.Title className='text-info py-0 my-0 d-flex justify-content-between'>
						<span>{name}</span>
						<Badge pill variant={ratingsClass}>
							{ratings}
							{'/5'}
						</Badge>
					</Card.Title>
					<Card.Text className='text-secondary pb-0 mb-0'>
						{cuisine && cuisine.length > 0
							? cuisine.toString()
							: 'Just Food'}
					</Card.Text>
				</Link>
			</Card.Body>
		</Card>
	)
}

export default RestaurantCard
