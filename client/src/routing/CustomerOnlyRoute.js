import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const CustomerOnlyRoute = ({
	component: Component,
	userType,
	auth: { loading, user },
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (!loading)
					if (user && user.userType === 'customer')
						return <Component {...props} />
					else return <Redirect to='/403' />
				// TODO: Show spinner
				else return <p>Loading...</p>
			}}
		/>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(CustomerOnlyRoute)
