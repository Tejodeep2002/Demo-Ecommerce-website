import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import { CartState } from '../context/Context';

function OptionBar() {

  const {productState,productDispatch}=CartState(); 

  return (
    <div>
      <div className='optionbar'>
        <Filters/>
        
        <div className='searcharea'>
           <p> Search:</p>
           <input type="text" id="SearchInput" onChange={(e)=>{
              productDispatch({
                type:"FILTER_BY_SEARCH",
                payload: e.target.value,
              })
           }} />

          <div>
            <Link to="/Cart"><input type="button" className='cartbutton' value="Add to Cart" /></Link>
        
        </div> 
        </div>

        
                </div>
    </div>
  )
}

export default OptionBar
