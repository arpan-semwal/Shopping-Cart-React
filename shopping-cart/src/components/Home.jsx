import SingleProduct from "./SingleProduct";
import { CartState } from "./contextApi/Context"

 

const Home = () => {

  const {state : {products}} = CartState();
  console.log(products);


  return (
    <div className="home">
      {/* <Filters/> */}
      {/* mapping over all the products */}
      <div className="productContainer">
        {products.map((prod) => {
         return <SingleProduct prod = {prod} key={prod.id}/>
        })}
      </div>
    </div>
  )
}

export default Home
