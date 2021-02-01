import React, { useEffect } from 'react'
//Redux
import { connect } from 'react-redux'
import { loadRestaurant } from '../actions/auth.action'

const MyRestaurant = ({ loadRestaurant }) => {
	useEffect(() => {
		loadRestaurant('600d30c433b6df34b09fffd7')
	})
	return <div></div>
}

const mapStateToProps = (state, ownProps) => {
	return {
		prop: state.prop
	}
}
export default connect(mapStateToProps, { loadRestaurant })(MyRestaurant)
