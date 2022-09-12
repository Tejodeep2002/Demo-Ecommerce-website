import React from 'react'
import ItemsTable from '../Components/ItemsTable';
import OptionBar from '../Components/OptionBar';
import '../Css/FrontPage.css';
import getProducts from '../Database/Product'

const products=getProducts();

function FrontPage() {
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
