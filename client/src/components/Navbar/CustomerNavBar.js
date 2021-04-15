import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'

const CustomerNavBar = ({ isAuthenticated, cartItems }) => {
	const [expanded, setExpanded] = useState(false)

	const closeNavbar = () => setExpanded(false)
	return (
		<Navbar
			sticky='top'
			collapseOnSelect
			expand='lg'
			bg='light'
			variant='light'
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
					{isAuthenticated && (
						<Nav.Link
							as={NavLink}
							to='/orders'
							onClick={closeNavbar}>
							Orders
						</Nav.Link>
					)}
					<Nav.Link as={NavLink} to='/cart' onClick={closeNavbar}>
						Cart{' '}
						{cartItems.length > 0 && (
							<Badge variant='success'>{cartItems.length}</Badge>
						)}
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
						<Nav.Link
							as={NavLink}
							to='/login'
							onClick={closeNavbar}>
							Log in
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='/signup'
							onClick={closeNavbar}>
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
		isAuthenticated: state.auth.isAuthenticated,
		cartItems: state.cart.items
	}
}

export default connect(mapStateToProps)(CustomerNavBar)
