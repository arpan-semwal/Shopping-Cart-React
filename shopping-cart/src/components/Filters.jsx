import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Rating from './Rating';
import { useState } from 'react';
const Filters = () => {


  const [rate , setRate] = useState(2);

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
          />
      </span>

      <span>
      <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
      </span>
      <span>
      <Form.Check
            inline
            label="Include Out Of Box"
            name="group1"
            type="checkbox"
            id={`inline-3`}
          />
      </span>
      <span>
      <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
          />
      </span>

      <span>
        <label style={{paddingRight:10}}>Rating:</label>
        
        <Rating rating={rate} style={{cursor:"pointer"}} onClick={(i) =>setRate(i+1)}/>
      </span>
      <Button  variant="light">Clear Filters</Button>
      
          
          
           
    </div>
  )
}

export default Filters
