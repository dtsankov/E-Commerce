import { AuthProvider } from "../../contexts/AuthContext";

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";



const Layout = () => {
 
  
    return (
    <AuthProvider> 
        <>
            <Header/>
            <main className="main-section">
            <Routers  />
            </main>
            <Footer />
        </>
    </AuthProvider >
    );
};


export default Layout;