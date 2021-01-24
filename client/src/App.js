import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Restaurant from './pages/Restaurant'

const App = () => {
	useEffect(() => {
		async function getData() {
			const res = await axios.get('/api/restaurant/list')
			console.table(res.data)
		}
		getData()
	}, [])
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/restaurant/:id' component={Restaurant} />
			</Switch>
			<Fragment>
				<div>Hello World</div>
			</Fragment>
		</Router>
	)
}

export default App
