import React, { useState } from 'react'

// Redux
import { connect } from 'react-redux'
import { addCookingInstructions } from '../../actions/cart.action'

// Bootstrap
import Form from 'react-bootstrap/Form'

const CookingInstructions = ({ addCookingInstructions }) => {
	const [cookingInstructionsInput, setCookingInstructionsInput] = useState('')

	const changeHandler = e => {
		setCookingInstructionsInput(e.target.value)
	}

	const updateCookingInstructions = () => {
		addCookingInstructions(cookingInstructionsInput)
	}
	return (
		<Form.Control
			as='textarea'
			onChange={changeHandler}
			value={cookingInstructionsInput}
			onBlur={updateCookingInstructions}
			rows={3}
			placeholder='cooking instructions(optional)'
			className='d-block m-2'
		/>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		cookingInstructions: state.cart.cookingInstructions
	}
}

export default connect(mapStateToProps, { addCookingInstructions })(
	CookingInstructions
)
