import React from 'react'
import { Link } from 'react-router-dom'

function OptionBar() {
  return (
    <div>
      <div className='optionbar'>
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

                    <div className='resetbtn'>
                    <i className="fa-solid fa-arrow-rotate-left"></i> <p>Reset</p>
                    </div>

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
