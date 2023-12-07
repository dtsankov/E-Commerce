import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react';


import {ProductContext} from '../contexts/ProductContext'


import React from "react";
import Home from '../components/Home/Home'
import ProductDetails from '../components/ProductDetails/ProductDetails'

 
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile';
import EditProduct from '../components/EditProduct/EditProduct';
import {Logout}  from '../components/Header/components/Logout';

import DrillMachines from '../components/ProductPages/DrillMachines'
import ElectricalScrewdriver from '../components/ProductPages/ElectricalScrewdriver'
import RechargableKits from '../components/ProductPages/RechargableKits'
import JigSaws from '../components/ProductPages/JigSaws'
import Grinders from '../components/ProductPages/Grinders'
import HandTools from '../components/ProductPages/HandTools'



import {ProtectedRoute, ProtectedAuthRoute} from './ProtectedRoute';

 

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
         
        

            <Route path='/*' element={<ProtectedRoute />}>
                <Route path='profile' element={<Profile />} />
            </Route>

            {/* products items */}

            <Route path='/catalog/drill-machines' element={<DrillMachines products={products}/>} />
            <Route path='/catalog/electrical-screwdrivers' element={<ElectricalScrewdriver products={products}/>} />
            <Route path='/catalog/rechargable-kits' element={<RechargableKits products={products}/>} />
            <Route path='/catalog/jig-saws' element={<JigSaws products={products}/>} />
            <Route path='/catalog/grinders' element={<Grinders products={products}/>} />
            <Route path='/catalog/hand-tools' element={<HandTools products={products}/>} />

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