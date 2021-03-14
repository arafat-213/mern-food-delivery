import React from 'react'

import { Link } from 'react-router-dom'
const EmptyCart = () => {
	return (
		<h1>
			It looks empty in here. Browse from{' '}
			<Link to='/home'> variety of restaurants </Link> available and get
			your favourite food delivered at your doorstep
		</h1>
	)
}

export default EmptyCart
