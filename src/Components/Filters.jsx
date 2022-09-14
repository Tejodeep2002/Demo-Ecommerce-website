import React from 'react'
import { CartState } from '../context/Context';

function Filters() {

    const {productState,
    productDispatch}=CartState();
    console.log(productState);

  

  return (
    <>
        <div className='filter'>
            <select className='dropbtn' onChange={(e)=>{
                productDispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: e.target.value
                })
            }} >
                <option>Filter</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Jeans">Jeans</option>
                <option value="Polo">Polo</option>
                <option value="Trouser">Trouser</option>
            </select> 
        </div>
        <div className='filter'>
            <select className='dropbtn' onChange={(f)=>{
                productDispatch({
                    type: "FILTER_BY_SIZE",
                    payload: f.target.value
                })
            }}>
                <option>Size</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
        <div className='resetbtn'>
        <i className="fa-solid fa-arrow-rotate-left"></i> <p>Reset</p>
        </div>
        
      
    </>
  )
}

export default Filters
