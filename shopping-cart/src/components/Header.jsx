import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartState } from './contextApi/Context';
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/esm/Button";

const Header = () => {
  const { state: { cart } , dispatch  , productDispatch , searchQuery} = CartState();

  const removeFromCart = (prod) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod,
    });
  };

  return (
    <div>
      <Navbar bg='dark' variant='dark' alignRight style={{height:80}}>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <Form.Control
              placeholder="Search a product"
              type="text"
              style={{ width: 500 }}
              className='m-auto'
              aria-describedby="basic-addon1"
              onChange={(e) => {
                productDispatch({
                  type:"FILTER_BY_SEARCH",
                  payload:e.target.value,
                })
              }}
            />
          </Navbar.Text>
          
          <Dropdown align="right">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <BsFillCartFill color='white' fontSize="20fpx" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{}} >
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <span className='cartItem' key={prod.id}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className='cartItemImg'
                    />

                    <div className='cartItemDetail'>
                      <span>{prod.name}</span>
                      <span>₹{prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete  
                      fontSize="20px"
                      style={{cursor:"pointer"}}
                        onClick={() => removeFromCart(prod)} 
                    />

                  <Link to="/cart">
                    <Button style={{width:"95%" , margin:" 0 10px"}}>
                      Go To Cart
                    </Button>
                  </Link>


                  </span>
                ))) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
