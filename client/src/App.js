import React, { Fragment, useEffect } from 'react'
import axios from 'axios'

const App = () => {
	useEffect(() => {
		async function getData() {
			const res = await axios.get('/api/restaurant/list')
			console.table(res.data)
		}
		getData()
	}, [])
	return (
		<Fragment>
			<div>Hello World</div>
		</Fragment>
	)
}

export default App
