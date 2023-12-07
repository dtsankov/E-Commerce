import 'bootstrap/dist/css/bootstrap.min.css';


import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from './contexts/ProductContext';



import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
import DataProvider from './contexts/DataContext';


function App() {
     

  return (
  <AuthProvider> 
      <ProductProvider>
        <DataProvider>
          <Header/>
          <main className="main-section">
          <Routers />
          </main>
          <Footer />
        </DataProvider>
      </ProductProvider> 
  </AuthProvider >
);
};

export default App;


     