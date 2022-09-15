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
      filteredProducts = filteredProducts.filter((prod)=>prod.category===byCategory);
      console.log(filteredProducts);
      
    }
    if(bySize){
      filteredProducts = filteredProducts.filter((prod)=> prod.description.size===bySize);
      console.log(filteredProducts);
    }
    if(searchQuery){
      filteredProducts = filteredProducts.filter((prod)=>{
        prod.name.toLowerCase().includes(searchQuery);
      });
    }

    return filteredProducts;
  }

  return (
    <>
        <div className='allItems'>
            <OptionBar/>
            <ItemsTable products={transformProducts()} />
        </div>
    </>
  )
}

export default FrontPage
