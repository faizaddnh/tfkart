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
import SeperateAdminProductList from './screens/SeperateAdminProductList';
import CategoryToys from './categories/CategoryToys';
import CategorySchool from './categories/CategorySchool';
import SeparateAdmin from './screens/SeparateAdmin';
import UpdateProduct from './screens/UpdateProduct';
import Search from './screens/Search';
import HomeNext from './categories/HomeNext';
import CategoryFashion from './categories/CategoryFashion';
import CategoryElectronics from './categories/CategoryElectronics';
import CategoryBeauty from './categories/CategoryBeauty';
import CategoryFoot from './categories/CategoryFoot';
import CategoryStationary from './categories/CategoryStationary';
import CategoryBag from './categories/CategoryBag';
import CategoryPerfume from './categories/CategoryPerfume';
import CategoryOlive from './categories/CategoryOlive';
import CategoryParty from './categories/CategoryParty';
import CategoryPardha from './categories/CategoryPardha';


function App() {
  return (
    <BrowserRouter>

      <Header />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/category/:id" element={ <HomeNext/> } />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproduct" element={<AdminRoute>  <AddProduct /> </AdminRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<ProtectedRoute> <PlaceOrder /> </ProtectedRoute> } />
        <Route path="/admin" element={<AdminRoute> <AdminDashboard /> </AdminRoute> } />
        <Route path="/ad" element={<AdminRoute> <SeperateAdminProductList /> </AdminRoute> } />
        <Route path="/admin/product" element={<AdminRoute> <AdminProductList /> </AdminRoute> } />
        <Route path="/complete" element={<SuccessOrder />} />
        <Route path="/orderhistory" element={<ProtectedRoute> <OrderHistory /> </ProtectedRoute>} />
        <Route path="/order/:id" element={<ProtectedRoute> <OrderId/> </ProtectedRoute>} />
        <Route path="/separate" element={<AdminRoute> <SeparateAdmin /> </AdminRoute> } />
        <Route path="/product/update/:id" element={<UpdateProduct/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/categorytoys" element={ <CategoryToys/> } />
        <Route path="/categoryschool-items" element={ <CategorySchool/> } />
        <Route path="/categoryelectronics" element={ <CategoryElectronics/> } />
        <Route path="/categoryfashion" element={ <CategoryFashion/> } />
        <Route path="/categorybeauty" element={ <CategoryBeauty/> } />
        <Route path="/categoryfoot" element={ <CategoryFoot/> } />
        <Route path="/categorystationary" element={ <CategoryStationary/> } />
        <Route path="/categorybag" element={ <CategoryBag/> } />
        <Route path="/categoryperfume" element={ <CategoryPerfume/> } />
        <Route path="/categoryolive" element={ <CategoryOlive/> } />
        <Route path="/categoryparty" element={ <CategoryParty/> } />
        <Route path="/categorypardha" element={ <CategoryPardha/> } />
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
