import React from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavigationBar = ({ isAuthenticated }) => {
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
						Cart
					</Nav.Link>
					<NavDropdown title='Account' id='collasible-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>
							My Profile
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>
							Favourite Restaurants
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>
							Something
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='#action/3.4'>
							Sign out
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				{!isAuthenticated && (
					<Nav>
						<Nav.Link as={NavLink} to='/login'>
							Log in
						</Nav.Link>
						<Nav.Link as={NavLink} to='/signup'>
							Sign up
						</Nav.Link>
					</Nav>
				)}
			</Navbar.Collapse>
		</Navbar>
	)
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}

export default connect(mapStateToProps)(NavigationBar)
