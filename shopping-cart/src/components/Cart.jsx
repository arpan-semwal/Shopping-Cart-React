 import {CartState} from "../components/contextApi/Context";
 import {Button, ListGroup , Row , Col , Image} from "react-bootstrap";
 import { useEffect, useState } from "react";
 import Ratings from "../components/Rating.jsx"; 
 import Form from 'react-bootstrap/Form';
 import { AiFillDelete } from "react-icons/ai";
 import Header from "./Header.jsx"
 import "./style.css";
const Cart = () => {

  const handle = () => {
    alert("Thanks for the purchase");
  }

   const {
    state:{cart},
    dispatch,
   } = CartState();

   const removeFromCart = (prod) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod,
    });
  };

   const [total , setTotal] = useState();

 // gives us total number of price
   useEffect(() => {
    setTotal(cart.reduce((acc , curr) => acc + Number(curr.price)*curr.qty , 0 ));
   } , [cart]);

  return (
    <div className="home">
      <Header/>
      <div className="productContainer">
      <ListGroup>
       {
        cart.map((prod)=> (
          <ListGroup.Item key={prod.id}>
             <Row>
             <Col md={2}>
              <Image src={prod.image} alt={prod.image} fluid rounded/>
            </Col>

            <Col md={2}>
              <span>{prod.name}</span>
            </Col>

            <Col md={2}>
              <span>₹{prod.price}</span>
            </Col>

            <Col md={2}>
              <Ratings rating={prod.ratings}/>
            </Col>

           

            <Col md={2}>
              <Form.Control 
                as="select" 
                value={prod.qty}  
                onChange={(e) => 
                dispatch({
                  type:"CHANGE_CART_QTY",
                  payload:{
                    id:prod.id,
                    qty:e.target.value,
                  }
                })
                }              
              >
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x+1} > {x+1}</option>
                  ))}
              </Form.Control>
            </Col>

            <Col md={2}>
            <AiFillDelete  
                      fontSize="20px"
                      style={{cursor:"pointer"}}
                        onClick={() => removeFromCart(prod)} 
                    />
            </Col>
          </Row>
          <Row>       
        </Row>
      </ListGroup.Item>
    ))
  }
        </ListGroup>

        <ListGroup >
          <div className="addCart">
            <span className="mainCart">
                <span className="">Subtotal ({cart.length}) items</span> 
          
                  <span style={{fontWeight:700 , fontSize:20}}>
                    Total : ₹{total}
                  </span>

                  <Button type="button" disabled={cart.length === 0} onClick={handle}>
                    Proceed to Checkout
                  </Button>
              </span>
          </div>
            
        </ListGroup>
      </div>
    </div>
  )
}

export default Cart
