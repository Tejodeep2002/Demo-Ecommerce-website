import React from 'react';
import { BsCart3 ,BsEmojiSmileFill } from 'react-icons/bs'

function ItemsTable(props) {
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
                            <td><BsEmojiSmileFill /> </td>
                            <td>{product.price}</td>
                            <td>
                            <div className='dataKart'>
                                    <button className='cartUpdate' disabled>5659</button>
                                    <button className='cart-btn' onClick={()=>this.handelAddKart(product)}><BsCart3 color="white"/></button>
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