import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Rating from './Rating';
import { CartState } from './contextApi/Context';
// eslint-disable-next-line react/prop-types
const Filters = ({isOpen}) => {
  
  const {productState:{byStock , byFastDelivery , sort , byRating , searchQuery } , productDispatch} =  CartState ();

  console.log(byStock , byFastDelivery , sort , byRating , searchQuery);
   

  return (
    
    
    <div className={`filters ${isOpen ? 'open' : 'closed'}`}>
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() => 
              productDispatch({
                type: "SORT_BY_PRICE",
                payload:"lowToHigh",
              })
            }

            checked={sort === "lowToHigh" ? true : false}
          />
      </span>

      <span>
      <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() => 
              productDispatch({
                type: "SORT_BY_PRICE",
                payload:"highToLow",
              })
            }

            checked={sort === "highToLow" ? true : false}
          />
      </span>
      <span>
      <Form.Check
            inline
            label="Include Out Of Box"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={() => 
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }

            checked={byStock}
          />
      </span>
      <span>
      <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={() => 
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }

            checked={byFastDelivery}
          />
      </span>

      <span>
        <label style={{paddingRight:10}}>Rating:</label>
        
        <Rating rating={byRating} style={{cursor:"pointer"}} onClick={(i) => productDispatch({
          type:"FILTER_BY_RATING",
          payload:i+1,
        })}/>
      </span>
      <Button  variant="light" onClick={() => productDispatch({
        type:"CLEAR_FILTERS",
      })}>Clear Filters</Button>
      
          
          
           
    </div>
  )
}

export default Filters
