/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from "../components/Rating";
import {CartState} from './contextApi/Context';
const SingleProduct = ({prod}) => {

  const {state:{cart} , dispatch}  = CartState();

  
  return (
    <div className="products">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{paddingBottom:10}}>
          <span>₹ {prod.price.split(".")[0]}</span>
          {prod.fastDelivery ? (
            <div>Fast Delivery</div>
          ):(
            <div>4 days delivery</div>
          )}

          <Rating rating={prod.ratings}/>
        </Card.Subtitle>

        {
          cart.some(p=>p.id == prod.id) ? (
            <Button variant="danger">Remove from cart</Button>
          ) : (
          <Button disabled={!prod.inStock}>
          {!prod.inStock ? "Out of Stock" : "Add to Cart"}
        </Button>
          ) //check is this particular thing is present inside the array or not
        }
       
        
        
      </Card.Body>
    </Card>
      
      
      
    </div>
  )
}

export default SingleProduct
