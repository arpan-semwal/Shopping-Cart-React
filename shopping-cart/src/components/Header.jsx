import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillCartFill } from 'react-icons/bs';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' >
        <Container>
        <Navbar.Brand>
            <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
        <Form.Control
            placeholder="Search a product"
            type="text"
            style={{width:500}}
            className='m-auto'
            aria-describedby="basic-addon1"
          />
        </Navbar.Text>

        
        <Dropdown alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsFillCartFill color='white' fontSize="20fpx" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth:370}}>
            <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
        </Dropdown>
     
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
