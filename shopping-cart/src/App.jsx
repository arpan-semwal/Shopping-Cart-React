import Header from "./components/Header"
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
