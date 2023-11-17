import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

import {useState,useEffect} from "react";
import { getSession } from "../../shared/session/session";

const Layout = () => {
    const [user, setUser] = useState(getSession());

  useEffect(() => {
    const currentUser  = getSession();
    setUser(currentUser );
  }, []); 

  
    return (
        <>
            <Header user={user} />
            <main className="main-section">
            <Routers user={user} setUser={setUser}/>
            </main>
            <Footer />
        </>
    );
};


export default Layout;