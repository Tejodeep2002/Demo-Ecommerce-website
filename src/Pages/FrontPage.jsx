import React from 'react'
import ItemsTable from '../Components/ItemsTable';
import OptionBar from '../Components/OptionBar';
import { CartState } from '../context/Context';
import '../Css/FrontPage.css';
 

function FrontPage() {

  const {state:{products}}=CartState();

  return (
    <>
        <div className='allItems'>
            <OptionBar/>
            <ItemsTable products={products}/>
        </div>
    </>
  )
}

export default FrontPage
