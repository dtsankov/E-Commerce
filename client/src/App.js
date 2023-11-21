import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./contexts/AuthContext";

import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";


function App() {

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

export default App;


     