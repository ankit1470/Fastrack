import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import AllProducts from './Components/AllProducts';
import Combined from './Components/Combined';
import ProductOverview from './Components/ProductOverview';

import axios from "axios"
import Cart from './Components/Cart';
import Orders from './Components/Orders';
axios.defaults.baseURL="http://localhost:8080"
axios.defaults.headers.post["Content-Type"]="application/json"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Combined/>}></Route>
        <Route path="/AllProducts" element={<AllProducts/>}></Route>
        <Route path="/AllProducts/:id" element={<ProductOverview/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
