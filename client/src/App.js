import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// React components
import RestaurantOnlyRoute from './routing/RestaurantOnlyRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Restaurant from './pages/Restaurant'
import MyRestaurant from './pages/MyRestaurant'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NavigationBar from './components/Navbar/NavigationBar'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth.action'
// Utils
import setAuthToken from './utils/setAuthToken'
import Orders from './pages/Orders'

// React-bootstrap
import { Container } from 'react-bootstrap'

if (localStorage.token) setAuthToken(localStorage.token)
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
	})
	return (
		<Provider store={store}>
			<Router>
				<NavigationBar />
				<Container>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/home' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Signup} />
						<RestaurantOnlyRoute
							exact
							path='/myrestaurant'
							component={MyRestaurant}
						/>
						<Route
							exact
							path='/restaurant/:id'
							component={Restaurant}
						/>
						<Route
							exact
							path='/restaurant/:id'
							component={Restaurant}
						/>
						<Route exact path='/cart' component={Cart} />
						<Route exact path='/orders' component={Orders} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	)
}

export default App
