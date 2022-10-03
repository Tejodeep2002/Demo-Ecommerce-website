import React from 'react';
import { useState } from 'react';
import { BsCart3 ,BsEmojiSmileFill } from 'react-icons/bs'
import { ImSad2 } from 'react-icons/im'
import { CartState } from '../context/Context';

function ItemsTable(props){

  const { state:{ cart },dispatch} = CartState();
  const [itemsarray,setItemsArray] = useState([]);
  const [checkedMark,setCheckedMark] = useState([]);



  // console.log(cart)
  const addItem=(element)=>{
    const itemsList={
      id:parseInt(element.target.id),
      quantity:parseInt(element.target.value)
    };
    const cpItemsarray = itemsarray;
    console.log(cpItemsarray);
    cpItemsarray[element.target.id-1]=itemsList;
    console.log(cpItemsarray);

    setItemsArray(cpItemsarray);
    console.log(itemsList);
    console.log(itemsarray);
  }

  const addCart=(stock, product)=> {
    console.log(product.id);
    itemsarray.map((items)=>{
      if(items.id === product.id) {
        if (items.quantity <= stock && items.quantity > 0) {
          product.quantity = items.quantity;
          if (cart.length === 0) {
            dispatch({
              type: "ADD_TO_CART",
              payload: product
            });
          };
          cart.some(c => c.id !== product.id) ? (
            dispatch({
              type: "ADD_TO_CART",
              payload: product
            })
          ) : (
            dispatch({
              type: "CHANGE_CART_QUANTITY",
              payload: {
                id: product.id,
                quantity: product.quantity
              }
            })
          );
        }
      }
      else {
        alert("Your requested item pieces is too much");
      }
    });
  }

  const checkbox =(element)=>{
  const checkedList={
    id:parseInt(element.target.id),
    checked:element.target.checked
  };
  const cpcheckedMark = checkedMark;
  
  cpcheckedMark[element.target.id-1]=checkedList;
  console.log(cpcheckedMark);

  setCheckedMark(cpcheckedMark);
  console.log(checkedList);
  console.log(checkedMark);
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
                              <input type="number" 
                                className='cartUpdate' 
                                id={product.id} 
                                onChange={addItem} 
                                value={cart.map((items)=>
                                  items.id===product.id ? items.quantity : itemsarray.map(e=>
                                    e.id===product.id ? e.quantity : null
                                ))}
                              />
                              {(product.quantity>0)? (
                                <button className='cart-btn' onClick={()=>addCart(product.instock,product)} ><BsCart3 color="white"/></button>
                              ):(
                                <button className='cart-btn-dis' disabled="disabled" ><BsCart3 color="white"/></button>
                              )}
                              <input type="checkbox" id={product.id} onChange={checkbox} />
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
