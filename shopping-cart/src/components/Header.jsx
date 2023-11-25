import { AiFillDelete } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillCartFill } from 'react-icons/bs';
import { Link} from 'react-router-dom';
import { CartState } from './contextApi/Context';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { MdOutlineMenu } from "react-icons/md";
import Filters from './Filters';
import { useState } from 'react';



const Header = () => {
  const { state: { cart }, dispatch, productDispatch } = CartState();

  const removeFromCart = (prod) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: prod,
    });
  };

 

  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
          <MdOutlineMenu
              fontSize="40px"
              fontFamily="bold"
              style={{ color: 'yellow', cursor: 'pointer' }}
              onClick={handleSideBar}
              
            />
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="mx-auto my-2 my-lg-0">
              <Form.Control
                placeholder="Search a product"
                type="text"
                style={{ width: '100%' }}
                onChange={(e) => {
                  productDispatch({
                    type: 'FILTER_BY_SEARCH',
                    payload: e.target.value,
                  });
                }}
              />
            </Form>
            <Dropdown align="left">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsFillCartFill color="white" fontSize="20fpx" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {cart.length > 0 ? (
                  cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img src={prod.image} alt={prod.name} className="cartItemImg" />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹{prod.price.split('.')[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeFromCart(prod)}
                      />
                      <Link to="/cart">
                        <Button style={{ width: '95%', margin: ' 0 10px' }}>Go To Cart</Button>
                      </Link>
                    </span>
                  ))
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    {openSideBar && <Filters isOpen={openSideBar} />}
    </div>
  );
};

export default Header;
