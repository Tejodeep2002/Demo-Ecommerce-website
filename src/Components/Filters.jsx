import React from 'react'

function Filters() {

  
  return (
    <>
        <div className='filter'>
            <select className='dropbtn'>
                <option>Filter</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Jeans">Jeans</option>
                <option value="Polo">Polo</option>
                <option value="Trouser">Trouser</option>
            </select> 
        </div>
        <div className='filter'>
            <select className='dropbtn'>
                <option>Size</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
        
      
    </>
  )
}

export default Filters
