import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
	const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className = 'place-order'>
		<div className="place-order-left">
			<p className='title'>Delivery Information</p>
			<div className="multi-field">
				<input type="text" placeholder = 'First name' />
				<input type="text" placeholder = 'Last name' />
			</div>
			<input type="email" placeholder='Email addres'/>
			<input type="text" placeholder='Street'/>
			<div className="multi-field">
				<input type="text" placeholder = 'City' />
				<input type="text" placeholder = 'State' />
			</div>
			<div className="multi-field">
				<input type="text" placeholder = 'Zip code' />
				<input type="text" placeholder = 'Country' />
			</div>
			<input type="number" placeholder='Phone' />
			
		</div>
		<div className="place-order-right">
		<div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="car-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="car-total-details">
                            <p>Delivery fee</p>
                            <p>${getTotalCartAmount() === 0?0:2}</p>
                        </div>
                        <hr />
                        <div className="car-total-details">
                            <p>Total</p>
                            <p>{getTotalCartAmount() === 0?0:getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button onClick = {()=>navigate('/order')}>PROCEED TO CHEACKOUT</button>
                </div>

		</div>
    </form>
  )
}

export default PlaceOrder
