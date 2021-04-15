import React from 'react'
import { Link } from 'react-router-dom'
//Bootstrap
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// CSS
import './RestaurantCard.css'

const RestaurantCard = ({ restaurant: { name, cuisine, id } }) => {
	let ratings = Math.floor(Math.random() * 6)

	const ratingsClass =
		ratings > 3.5 ? 'success' : ratings > 2.5 ? 'warning' : 'danger'
	return (
		<Card className='restaurant-card text-wrap'>
			<Link to={`/restaurant/${id}`} className='text-decoration-none'>
				<Row className='no-gutters'>
					<Col xs={4}>
						<div className='card-img-overlay p-0 text-left'>
							<Badge pill variant={ratingsClass}>
								{ratings} / 5
							</Badge>
						</div>
						<Card.Img
							variant='top'
							className='restaurant-img'
							src='https://etimg.etb2bimg.com/photo/75161189.cms'
						/>
					</Col>
					<Col xs={8}>
						<Card.Body className='pb-0 pt-2'>
							<div className='card-img-overlay p-0 text-right'>
								<Badge
									pill
									variant='light'
									className='text-secondary'>
									&hearts;
								</Badge>
							</div>
							<Card.Title className='text-info py-0 my-0 d-flex justify-content-between'>
								<span className='text-truncate'>{name}</span>
							</Card.Title>
							<Card.Text className='text-secondary text-truncate pb-0 mb-0'>
								{cuisine && cuisine.length > 0
									? cuisine.toString()
									: 'Just Food'}
							</Card.Text>
						</Card.Body>
					</Col>
				</Row>
			</Link>
		</Card>
	)
}

export default RestaurantCard
