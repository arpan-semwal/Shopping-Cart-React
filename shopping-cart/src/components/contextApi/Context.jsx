import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./CartReducer";
import faker from "faker"
const Cart = createContext();

const Context = ({ children }) => {
  const customImageURLs = [
 "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/346752/pexels-photo-346752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//  "https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     
  ];

  const products = customImageURLs.map((imageUrl) => ({
    id: Math.random().toString(36), // Generating a unique ID here
    name: faker.commerce.productName(), // You can set a default name here if needed
    price:faker.commerce.price(),// You can set a default price here if needed
    image: imageUrl,
    inStock: Math.floor(Math.random() * 10), // Randomizing inStock quantity
    fastDelivery: Math.random() < 0.5, // Randomly assigning fastDelivery
    ratings: Math.floor(Math.random() * 5) + 1, // Randomizing ratings between 1 to 5
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productDispatch, productState }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

