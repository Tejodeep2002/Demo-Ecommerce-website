import React from 'react'

function CartTotal() {
  return (
    <>
      <div className='Total_box'>
        <div className='CartTotals'>Cart totals</div>
        <div className='Subtotal'>Subtotal</div>
        <div className='Total'>Total</div>
        <div>
          <button className='proceed-btn'>PROCEED TO</button>
        </div>
      </div>
    </>
  )
}

export default CartTotal
