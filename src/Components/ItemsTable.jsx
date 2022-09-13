import React from 'react';
import { BsCart3 ,BsEmojiSmileFill } from 'react-icons/bs'
import { ImSad2 } from 'react-icons/im'

function ItemsTable(props) {

  const color =()=>{}
 
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
                                    <button className='cartUpdate' disabled>5659</button>
                                    <button className='cart-btn' disabled={(product.quantity<=0)? "Disable": null}><BsCart3 color="white"/></button>
                                    <input type="checkbox"/>
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
