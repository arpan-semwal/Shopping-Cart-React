export const cartReducer = (state , action) => { // takes 2 parameter state : is the cureent state and action is the action that specifies what needs to be changed in the state 
    switch(action.type){ // check the type property of teh action , type usually describes teh action to be performed 
        case "ADD_TO_CART":
            //first it creates a duplicate of cureent state and tehn crate a new cart array and save the data based on payload
            return{...state , cart:[...state.cart , { ...action.payload , qty:1} ]}

        
         case "REMOVE_FROM_CART":
            return{...state , cart:state.cart.filter(c=>c.id !== action.payload.id)};


        case "CHANGE_CART_QTY":
                return{...state,cart:state.cart.filter(c=> c.id === action.payload.id? c.qty = action.payload.qty: c.qty)}
        default:
            return state;
    }
};