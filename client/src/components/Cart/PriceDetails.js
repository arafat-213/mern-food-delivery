import React from 'react'

const PriceDetails = ({ totalPrice }) => {
	return (
		<div>
			<h3>Total price: {totalPrice} rs</h3>
			<p>
				The price displayed is inclusive of all taxes and operational
				costs
			</p>
		</div>
	)
}

export default PriceDetails
