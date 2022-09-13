import React from 'react'
import CheckoutList from '../Components/CheckoutList'
import '../Css/Cart.css'
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom'

function CheckoutPage() {
  
  const { state:{cart},despatch }=CartState();
  
  return (
    <>
      <Link to="/"><button type="button" className='btn btn-primary'>Back</button></Link>
      <div className='checkout-allItems'>
        
        <CheckoutList/> 
      </div>

      
    </>
  )
}

export default CheckoutPage
