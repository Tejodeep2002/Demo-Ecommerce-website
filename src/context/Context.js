import { createContext, useContext, useReducer } from "react";
import getProducts from '../Database/Product';
import { cartReducer } from './Reducers';
import { productReducer } from './Reducers';

const Cart = createContext(); 

function Context({children}) {

    const [state, dispatch] = useReducer(cartReducer, {
        products:getProducts(),
        cart:[]
    });

    const [productState,productDispatch] = useReducer(productReducer,{
      byCategory: false,
      bySize: false,
      searchQuery: "",
    });
    
    

  return <Cart.Provider value={{state,dispatch,productState,productDispatch}}>{children}</Cart.Provider>;
  
}
export default Context;

export const CartState=()=>{
  return useContext(Cart);
}
