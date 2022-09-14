import React from 'react'
import ItemsTable from '../Components/ItemsTable';
import OptionBar from '../Components/OptionBar';
import { CartState } from '../context/Context';
import '../Css/FrontPage.css';
 

function FrontPage() {
  
  const {state:{products},
      productState:{byCategory,bySize,searchQuery}}=CartState();


  const transformProducts=()=>{
    let filteredProducts = products; 

    if(byCategory){
      filteredProducts = filteredProducts.filter((prod)=> prod.Category);
      console.log(filteredProducts);
    }
  }

  return (
    <>
        <div className='allItems'>
            <OptionBar/>
            <ItemsTable products={products} />
        </div>
    </>
  )
}

export default FrontPage
