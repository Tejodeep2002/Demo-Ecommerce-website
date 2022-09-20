import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import { ImCross } from 'react-icons/im'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CheckoutList() {

  const { state:{cart},dispatch }=CartState();
  const [total,setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price*curr.quantity),0));
  },[cart]);


  const increment=(product)=>{
    if(product.quantity<product.instock && product.quantity!=0){
      product.quantity=(parseInt(product.quantity)+1)
    dispatch({
          type: "CHANGE_CART_QUANTITY",
          payload: {
            id:product.id,
            quantity:product.quantity
          }
        })
    }
  else{
    alert("Your Requested exceeded");
  }
  }

  const decrement=(product,stock)=>{
    if(product.quantity<product.instock ){
    product.quantity=(parseInt(product.quantity)-1)
    dispatch({
          type: "CHANGE_CART_QUANTITY",
          payload: {
            id:product.id,
            quantity:product.quantity
          }
        })
    }
  else{
    alert("Your Requested exceeded");
  }
  }
  console.log(cart);

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
                            <td><AiOutlinePlus onClick={()=>increment(product,product.instock)}/> {product.quantity}  <AiOutlineMinus onClick={()=>decrement(product)}/></td>
                            <td>${product.price * product.quantity}</td>
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
          {(cart.length!==0) ? <Link to="/Thankyou"><button className='proceed-btn'>PROCEED TO CHECKOUT</button></Link>
          : <button className='proceed-btn'>PROCEED TO CHECKOUT</button>}
        </div>
      </div>
    </>
  )
}

export default CheckoutList
