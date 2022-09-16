import React from 'react'
import '../Css/Thankyou.css';
import { Link } from 'react-router-dom';

function Thankyou() {

  return (
    <>
      <Link to="/"><button type="button" class="btn btn-primary">Back</button></Link>
      <div className='page'>
        <h1>Thank you for Buying our Products</h1>
      </div>
      
    </>
  )
}

export default Thankyou
