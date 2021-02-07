import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ menu }) => {
	return menu.map(menuItem => (
		<MenuItem menuItem={menuItem} key={menuItem.id} />
	))
}

export default Menu
