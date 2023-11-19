import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

import {useState,useEffect} from "react";
import { StateContext } from "../../contexts/StateContext";
import { getSession } from "../../shared/session/session";

const Layout = () => {
    const [user, setUser] = useState('');

  useEffect(() => {
    const currentUser  = getSession();
    setUser(currentUser );
  }, [user]); 

  const userHandler = (currUser)=>{
    setUser(currUser)
  }

  const contextValue = {
    userHandler
  }
  
    return (
    <StateContext.Provider value={contextValue}> 
        <>
            <Header user={user} />
            <main className="main-section">
            <Routers  />
            </main>
            <Footer />
        </>
    </StateContext.Provider >
    );
};


export default Layout;