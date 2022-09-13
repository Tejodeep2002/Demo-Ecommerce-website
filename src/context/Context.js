import { createContext, useContext, useReducer } from "react";
import getProducts from '../Database/Product';
import { cartReducer } from './Reducers';

const Cart = createContext(); 

function Context({children}) {

    const [state, dispatch] = useReducer(cartReducer, {
        products:getProducts(),
        Cart:[]
    });
    
    

  return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>;
  
}
export default Context;

export const CartState=()=>{
  return useContext(Cart);
}
