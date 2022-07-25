import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Compile from './Components/Compile';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';



function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/products" element={<Compile/>}/>
        <Route path= {`/productDetails/:id`} element={<ProductDetails/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
