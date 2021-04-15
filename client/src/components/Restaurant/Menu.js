import React from 'react'
import MenuItem from './MenuItem'

// Bootstrap
import { Row, Col } from 'react-bootstrap'
const Menu = ({ menu }) => (
	<Row>
		{menu.map(menuItem => (
			<Col lg={6} md={6} sm={12} className='mt-2'>
				<MenuItem menuItem={menuItem} key={menuItem.id} />
			</Col>
		))}
	</Row>
)

export default Menu
