import React, { useEffect } from 'react'

//Redux
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../actions/restaurant.action'

const Restaurant = ({ getRestaurantById }) => {
	let params = useParams()
	useEffect(() => {
		getRestaurantById(params.id)
	})
	return <div>Display a restaurant here</div>
}

const mapStateToProps = (state, ownProps) => {
	return {
		prop: state.prop
	}
}
export default connect(mapStateToProps, { getRestaurantById })(Restaurant)
