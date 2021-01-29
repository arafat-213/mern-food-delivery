import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
import { signup } from '../actions/auth.action'

const Signup = ({ signup, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		address: '',
		phoneNumber: '',
		userType: 'customer'
	})

	const {
		name,
		email,
		password,
		confirmPassword,
		address,
		phoneNumber,
		userType
	} = formData

	const changeHandler = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitHandler = e => {
		e.preventDefault()
		signup(name, email, password, userType, address, phoneNumber)
	}

	if (isAuthenticated) return <Redirect to='/dashboard' />
	return (
		<Form>
			<Form.Group controlId='formBasicName'>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='name'
					name='name'
					value={name}
					onChange={changeHandler}
					placeholder='Enter name'
				/>
			</Form.Group>
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
			<Form.Group controlId='formBasicConfirmPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='confirmPassword'
					name='confirmPassword'
					value={confirmPassword}
					onChange={changeHandler}
					placeholder='confirm password'
				/>
			</Form.Group>
			<Form.Group controlId='exampleForm.ControlTextarea1'>
				<Form.Label>Address</Form.Label>
				<Form.Control
					name='address'
					value={address}
					as='textarea'
					onChange={changeHandler}
					rows={3}
				/>
			</Form.Group>
			<Form.Group controlId='formBasicPhone'>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control
					type='tel'
					name='phoneNumber'
					value={phoneNumber}
					onChange={changeHandler}
					placeholder='Enter phoneNumber'
				/>
			</Form.Group>
			<Form.Group controlId='formBasicCheckbox'>
				<Form.Check type='checkbox' label='Check me out' />
			</Form.Group>
			<Button variant='primary' type='submit' onClick={submitHandler}>
				Sign up
			</Button>
		</Form>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}

export default connect(mapStateToProps, { signup })(Signup)
