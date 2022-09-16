import React, { useState } from 'react';
import { BsCart3 ,BsEmojiSmileFill } from 'react-icons/bs'
import { ImSad2 } from 'react-icons/im'
import { CartState } from '../context/Context';

function ItemsTable(props) {

  const { state:{ cart },dispatch} = CartState();

  
  const[items,setItems] = useState(0);

  const addItem=(element)=>{
    setItems(element.target.value);
    
  }
  const addCart=(stock,product,id)=>{
    if(items<=stock && items>0){
      if(cart.length===0){
        dispatch({
          type: "ADD_TO_CART",
          payload: product
        })
      }
      cart.map(c=>{
        (c.id!==id) ?
          dispatch({
            type: "ADD_TO_CART",
            payload: product
          }):dispatch({
            type: "CHANGE_CART_QUANTITY",
            payload: {
              id:product.id,
              quantity:items
            }
          })
      });
    }
    else{
      alert("Your Requested exceeded");
    }
  }
  return (
    <>
        <div className='table_area'>                  
                    <table className='content-table'>
                    <thead>
                      <tr>
                            <th>Image</th>                        
                            <th>Name</th>                        
                            <th>Color</th>                        
                            <th>Stock</th>                        
                            <th>Price</th>                        
                            <th>Buy</th>                        
                      </tr>
                    </thead>
                    <tbody>
                        {props.products.map(product=>
                        <tr key={product.id}>
                            <td><img src={product.image} width="50px" height="60px" alt="Loading" /></td>
                            <td>{product.name}</td>
                            <td>{product.description.color}</td>
                            <td> {(product.quantity>0)? <span><BsEmojiSmileFill color="green"/> In stock</span>:<span><ImSad2 color="red"/> Out of Stock</span>}</td>
                            <td>${product.price}</td>
                            <td>
                            <div className='dataKart'>
                                    <input type="number" className='cartUpdate' id="items_no" onChange={addItem}/>
                                    {(product.quantity>0)? (
                                      <button className='cart-btn' onClick={()=>addCart(product.instock,product,product.id)} ><BsCart3 color="white"/></button>
                                    ):(
                                      <button className='cart-btn-dis' disabled="disabled" ><BsCart3 color="white"/></button>
                                    )}
                                    <input type="checkbox" />
                            </div>
                            </td>
                        </tr>
                        )}
                    </tbody>
                    </table>
                </div>
    </>
  )
}

export default ItemsTable
