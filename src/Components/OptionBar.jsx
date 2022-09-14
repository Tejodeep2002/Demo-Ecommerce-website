import React from 'react'
import { Link } from 'react-router-dom'
import Filters from './Filters'

function OptionBar() {
  return (
    <div>
      <div className='optionbar'>
        <Filters/>
        

        <div className='searcharea'>
           <p> Search:</p><input type="text" id="SearchInput" />
        </div>

        <div>
            <Link to="/Cart"><input type="button" className='cartbutton' value="Add to Cart" /></Link>
        </div>
                </div>
    </div>
  )
}

export default OptionBar
