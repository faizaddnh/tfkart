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
import OrderHistory from './screens/OrderHistory';
import OrderId from './screens/OrderId';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>

      <Header />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproduct" element={ <AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<ProtectedRoute> <PlaceOrder /> </ProtectedRoute> } />
        <Route path="/admin" element={<AdminRoute> <AdminDashboard /> </AdminRoute> } />
        <Route path="/admin/product" element={<AdminRoute> <AdminProductList /> </AdminRoute> } />
        <Route path="/complete" element={<SuccessOrder />} />
        <Route path="/orderhistory" element={<ProtectedRoute> <OrderHistory /> </ProtectedRoute>} />
        <Route path="/order/:id" element={<ProtectedRoute> <OrderId/> </ProtectedRoute>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
