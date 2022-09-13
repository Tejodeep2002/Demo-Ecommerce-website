import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import { ImCross } from 'react-icons/im'


function CheckoutList() {

  const { state:{cart},despatch }=CartState();
  const [total,setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price),0));
  },[cart]);

  console.log(cart);
  return (
    <>
      <div className='checkout-table-area'>
        <table className='checkout-table'>
                    <thead>
                      <tr>                        
                            <th colSpan="2" >Product</th>                        
                            <th>Price</th>                        
                            <th>Quantity</th>                        
                            <th>Subtotal</th>                              
                      </tr>
                    </thead>
                    <tbody>
                        {cart.map(product=>
                        <tr key={product.id}>
                            <td><ImCross/></td>
                            <td><img src={product.image} width="50px" height="60px" alt="Loading" /></td>
                            <td>{product.name}-{product.description.color}</td>
                            <td>${product.price}</td>

                            {/* <td>
                            <div className='dataKart'>
                                    <input type="number" className='cartUpdate' id="items_no"/>
                                    {(product.quantity>0)? (
                                      <button className='cart-btn' onClick={()=>{
                                        dispatch({
                                          type: "ADD_TO_CART",
                                          payload: product,
                                        })
                                      }} ><BsCart3 color="white"/></button>
                                    ):(
                                      <button className='cart-btn-dis' disabled="disabled" ><BsCart3 color="white"/></button>
                                    )}
                                    <input type="checkbox" />
                            </div>
                            </td> */}
                        </tr>
                        )}
                    </tbody>
        </table>
      </div>

      <div className='Total_box'>
        <div className='CartTotals'>Cart totals</div>
        <div className='Subtotal'>Subtotal<span className='sub-total-price'>${total}</span></div>
        <div className='Total'>Total<span className='total-price'>${total}</span></div>
        <div>
          <button className='proceed-btn'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default CheckoutList
