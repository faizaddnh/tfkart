import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Product from './screens/Product';
import AddProduct from './screens/AddProduct';
import Cart from './screens/Cart';
import Shipping from './screens/Shipping';
import PlaceOrder from './screens/PlaceOrder';
import AdminDashboard from './screens/AdminDashboard';
import Header from './screens/Header';
import SuccessOrder from './screens/SuccessOrder';
import AdminRoute from './components/AdminRoute';
import AdminProductList from './screens/AdminProductList';


function App() {
  return (
    <BrowserRouter>

      <Header />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproduct" element={<AdminRoute>  <AddProduct /> </AdminRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/admin" element={<AdminRoute> <AdminDashboard /> </AdminRoute>} />
        <Route path="/admin/product" element={<AdminRoute> <AdminProductList /> </AdminRoute>} />
        <Route path="/complete" element={<SuccessOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
