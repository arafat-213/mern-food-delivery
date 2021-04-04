import React from 'react'
import { NavLink } from 'react-router-dom'

// Redux

// Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const RestaurantNavbar = () => {
	return (
		<Navbar
			sticky='top'
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'>
			<Navbar.Brand as={NavLink} to='/home'>
				FoodHub
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav activeKey='/home' className='mr-auto'>
					<Nav.Link as={NavLink} to='/orders'>
						Orders
					</Nav.Link>
					<Nav.Link as={NavLink} to='/cart'>
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
						<NavDropdown.Item href='#action/3.4'>
							Sign out
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default RestaurantNavbar
