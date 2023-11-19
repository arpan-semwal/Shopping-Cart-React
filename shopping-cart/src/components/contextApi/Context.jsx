import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer , productReducer } from "./CartReducer";

const Cart = createContext();
// retruns object with two components Provider and Consumer
faker.seed(99);
//In React, children is a special prop that represents the content between 
//the opening and closing tags of a component. 
//It allows you to compose components and pass content into them.
// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {

  
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: `https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, { // using use reducer to manage the state
  products: products, //inital state products and cart is empty
    cart: [],
  });


  const [productState , productDispatch] = useReducer(productReducer , {
      byStock:false,
      byFastDelivery:false,
      byRating:0,
      searchQuery:"",
  })

  return (
    // Corrected "Provider" and passed the correct value
    <Cart.Provider value={{ state, dispatch  , productDispatch , productState}}> 
      {children}
    </Cart.Provider>
  );
};

export default Context;
//use context is used to return the current context value
export const CartState = () => {
  return useContext(Cart); //returns a object with a state and dispatch property
};


