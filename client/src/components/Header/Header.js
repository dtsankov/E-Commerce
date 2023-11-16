//React related imports

import {Link} from "react-router-dom";	
import {useState,useEffect} from "react";

//Font Awesome Fonts and Icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import logo from '../../resources/images/logo.png'

//Components imports

import { Search } from "../Search/Search";
import { LoginButton } from "./components/LoginButton";
import { ProfileButton } from "./components/ProfileButton";
import { getSession } from "../../shared/session/session";


//Component

 const Header = () =>{

   const [user,setUser] = useState('')

   useEffect(()=>{
         const isUser = getSession()
         console.log(isUser);
         setUser(isUser)
   },[])

   console.log(typeof user);

    return (

       <header className="section-top-bar">

          <div className="container">

            <section className="section-container-wrapper">

               <div className="container-wrapper-top-left">

                  <div className="component-wrapper">
                     <div className="logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                     </div>
                  </div>

               </div>

               <div className="container-wrapper-top-middle">

                  <div className="component-wrapper">
                     <Search/>
                  </div>

               </div>

               <div className="container-wrapper-top-right">
                  {user === null ? <LoginButton/> : <ProfileButton/>}

                  <div id="heart" className="component-wrapper">
                     <div className="heart-container"> 
                        <Link to="favourites" className="login-wrapper">
                           <div >
                              <p><FontAwesomeIcon icon={faHeart} className="heart-logo" /></p>
                              <p className="heart-text">Favourites</p>
                           </div>

                        </Link>
                     </div>
                  </div>

                  <div id="cart" className="component-wrapper">
                     <div className="cart-container"> 
                        <Link to="cart" className="login-wrapper">
                           <div >
                              <p><FontAwesomeIcon icon={faCartShopping} className="cart-logo" /></p>
                              <p className="cart-text">Shopping Cart</p>
                           </div>

                        </Link>
                     </div>
                  </div>

               </div>
            </section>
          </div>
       </header>
)
    
}
export default Header;

 