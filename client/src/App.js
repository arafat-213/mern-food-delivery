import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// React components
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Restaurant from './pages/Restaurant'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth.action'
// Utils
import setAuthToken from './utils/setAuthToken'
import axios from 'axios'

if (localStorage.token) setAuthToken(localStorage.token)
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
		const getData = async () => {
			const res = await axios.get(
				'http://localhost:5000/api/restaurant/list'
			)
			console.log(res.data)
		}
		getData()
	})
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route
						exact
						path='/restaurant/:id'
						component={Restaurant}
					/>
				</Switch>
				<Fragment>
					<div>Hello World</div>
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App
