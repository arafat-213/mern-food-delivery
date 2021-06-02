import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import { logout } from '../../actions/auth.action'
// Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const RestaurantNavbar = ({ logout }) => {
	const [expanded, setExpanded] = useState(false)

	const closeNavbar = () => setExpanded(false)

	return (
		<Navbar
			sticky='top'
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'
			expanded={expanded}>
			<Navbar.Brand as={NavLink} to='/home' onClick={closeNavbar}>
				FoodZilla
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls='responsive-navbar-nav'
				onClick={() => setExpanded(expanded ? false : 'expanded')}
			/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav activeKey='/home' className='mr-auto'>
					<Nav.Link as={NavLink} to='/orders' onClick={closeNavbar}>
						Orders
					</Nav.Link>
					<Nav.Link as={NavLink} to='/cart' onClick={closeNavbar}>
						Menu
					</Nav.Link>
					<NavDropdown title='Account' id='collasible-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>
							My Profile
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>
							My Restaurant
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>
							Need help
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logout}>
							Sign out
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default connect(null, { logout })(RestaurantNavbar)
