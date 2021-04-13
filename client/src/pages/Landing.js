import React from 'react'

// React-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// CSS
import './Landing/Landing.css'
import Waves from './Landing/waves.svg'

const Landing = () => {
	return (
		<Container className='landing d-flex flex-column justify-content-between h-100 px-0'>
			<Row className='mx-auto'>
				<Col className=''>
					<h1 className='text-dark font-weight-bold'>
						Welcome to FoodZilla
					</h1>
					<h3>One place solution for all your delicious cravings</h3>
				</Col>
			</Row>

			<img src={Waves} alt='waves' className='waves' />
		</Container>
	)
}

export default Landing
