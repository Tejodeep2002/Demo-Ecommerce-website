import React from 'react'
import { CartState } from '../context/Context';

function Filters() {

    const {productState,productDispatch}=CartState();

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
                <option value="hoodie">Hoodie</option>
                <option value="jeans">Jeans</option>
                <option value="polo">Polo</option>
                <option value="trouser">Trouser</option>
            </select> 
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
            <div className='resetbtn'>
                <button onClick={()=>{ 
                    productDispatch({
                        type: "CLEAR_FILTER"
                    })
                }}><i className="fa-solid fa-arrow-rotate-left"></i> <p>Reset</p></button>
        </div>
        </div>
    </>
  )
}

export default Filters
