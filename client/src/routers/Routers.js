import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react';


import {ProductContext} from '../contexts/ProductContext'


import React from "react";
import Home from '../components/Home/Home'
import ProductDetails from '../components/ProductDetails/ProductDetails'

/* import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Shop from '../pages/Shop' */
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile';
import EditProduct from '../components/EditProduct/EditProduct';
import {Logout}  from '../components/Header/components/Logout';



//product pages // 

/* import Gaming from '../components/Product Pages/Gaming'
import Laptops from '../components/Product Pages/Laptops'
import Office from '../components/Product Pages/Office'
import Wireless from '../components/Product Pages/Wireless'
import Watches from '../components/Product Pages/Watches'
import Phones from '../components/Product Pages/Phones' */


import {ProtectedRoute, ProtectedAuthRoute} from './ProtectedRoute';

/* import AllProducts from '../admin/YourProducts';

/* import Favorites from '../pages/Favorites'; */

const Routers = () => {

const {
    products   
    } = useContext(ProductContext);

    return (
        <Routes>
            {/* default pages */}
            <Route path='/' element={<Home products={products} />} />
            <Route path='/catalog/:productId' element={<ProductDetails />} />
            <Route path='/catalog/:productId/edit' element={<EditProduct />} />
          {/*   <Route path='shop' element={<Shop />} />
            
            <Route path='cart' element={<Cart />} />
            <Route path='favorites' element={<Favorites />} /> */}

            {/* admin pages */}

            <Route path='/*' element={<ProtectedRoute />}>
                <Route path='profile' element={<Profile />} />
                {/* <Route path='checkout' element={<Checkout />} />  */}
            </Route>
            {/* products items */}

            {/* <Route path='gaming' element={<Gaming />} />
            <Route path='laptops' element={<Laptops />} />
            <Route path='office' element={<Office />} />
            <Route path='phones' element={<Phones />} />
            <Route path='watches' element={<Watches />} />
            <Route path='wireless' element={<Wireless />} /> */}

            {/* login & sign */}
            <Route path='/*' element={<ProtectedAuthRoute />}>
                <Route path='signup' element={<Register />} />
                <Route path='login' element={<Login />}/>
            </Route>
            <Route path='logout' element={<Logout />}/>
        </Routes>
    );
};

export default Routers