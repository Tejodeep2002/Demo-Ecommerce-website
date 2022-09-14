import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import { ImCross } from 'react-icons/im'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


function CheckoutList() {

  const { state:{cart},dispatch }=CartState();
  const [total,setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price),0));
  },[cart]);

  return (
    <>
      <div className='checkout-table-area'>
        <table className='checkout-table'>
                    <thead>
                      <tr>                                               
                            <th colSpan={2}>Product</th>                        
                            <th>Price</th>                        
                            <th>Quantity</th>                        
                            <th>Subtotal</th>                              
                      </tr>
                    </thead>
                    <tbody>
                        {cart.map(product=>
                        <tr key={product.id}>
                            
                            <td colSpan="2"><button className='btn-remove' onClick={()=>{
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload:product
                              })
                            }}><ImCross/></button>
                            <img src={product.image} width="50px" height="60px" alt="Loading" />
                            {product.name}-{product.description.color}</td>
                            <td>${product.price}</td>
                            <td ><AiOutlinePlus/>{product.quantity}<AiOutlineMinus/></td>
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
