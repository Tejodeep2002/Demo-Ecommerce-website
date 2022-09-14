export const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {...state,
                cart:[...state.cart, {...action.payload}]};
        case "REMOVE_FROM_CART":
            return {...state,
                cart:state.cart.filter(c=>c.id!==action.payload.id)};
        case "CHANGE_CART_QUANTITY":
            return {...state,cart:state.cart.filter(c=>c.id===action.payload.id ? c.quantity=action.payload.quantity : c.quantity)
            };
        case "INCREMENT":

        default:
            return state;
    };
};


export const productReducer=(state,action)=>{
    switch(action.type){
        case "FILTER_BY_CATEGORY":
            return {...state, byCategory: action.payload}
        case "FILTER_BY_SIZE":
            return {...state, bySize: action.payload}
        case "FILTER_BY_SEARCH":
            return {...state, searchQuery: action.payload}  
        case "CLEAR_FILTER":
            return {
                byCategory: false,
                bySize: false,
                searchQuery: "",
            }  
        default:
            return state;
    }
   
}