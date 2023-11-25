import SingleProduct from "./SingleProduct";
import { CartState } from "./contextApi/Context";
import Header from "./Header";
import "./style.css";

const Home = () => {

  const {state : {products} , productState : {sort , byFastDelivery , byRating , searchQuery , byStock}} = CartState();
  
  //changing the products accoring to the filters
  const transformProducts = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => (
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      ))
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    //if it is fastdelivery than it will filter all the products according to the fastdelivery
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings === byRating
      );
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  }


  return (
    <div>
      <div className="home">
       <Header/> 
        {/* <Filters /> */}
        <div className="productContainer">
          {transformProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
