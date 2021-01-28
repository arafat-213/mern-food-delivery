import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { login } from '../actions/auth.action'
import { connect } from 'react-redux'
const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const { email, password } = formData

	const changeHandler = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitHandler = e => {
		e.preventDefault()
		login(email, password)
	}

	if (isAuthenticated) return <Redirect to='/dashboard' />
	return (
		<Form>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					name='email'
					value={email}
					onChange={changeHandler}
					placeholder='Enter email'
				/>
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					name='password'
					value={password}
					onChange={changeHandler}
					placeholder='Password'
				/>
			</Form.Group>
			<Form.Group controlId='formBasicCheckbox'>
				<Form.Check type='checkbox' label='Check me out' />
			</Form.Group>
			<Button variant='primary' type='submit' onClick={submitHandler}>
				Submit
			</Button>
		</Form>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}

export default connect(mapStateToProps, { login })(Login)
