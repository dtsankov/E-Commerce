//React related imports
import { useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";	


import { AuthContext } from '../../contexts/AuthContext'; 
import { ProductContext } from '../../contexts/ProductContext';
import { productServiceFactory } from '../../services/productService';
import { getSession } from '../../session/session';



//Font Awesome Fonts and Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"


import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import logo from '../../resources/images/logo.png'

//Components imports

import { Search } from "../Search/Search";
import { LoginButton } from "./components/LoginButton";
import { ProfileButton } from "./components/ProfileButton";



//Component

 const Header = () =>{
   const { isAuthenticated } = useContext(AuthContext);
   const {onSetProducts } = useContext(ProductContext);
   const navigate = useNavigate();
   const productService = productServiceFactory(getSession()?.accessToken);




   const onProductSearchSubmit = async (values) => {

      // console.log(values)
      const result = await productService.getAll();
      const filteredProducts = result.filter(product => product.title.toLowerCase().includes(values.toLowerCase()));
      onSetProducts(state=>[...filteredProducts]);
  }


    return (

       <header className="section-top-bar">

          <div className="container">

            <section className="section-container-wrapper">

               <div className="container-wrapper-top-left">

                  <div className="component-wrapper">
                     <div className="header-logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                     </div>
                  </div>

               </div>

               <div className="container-wrapper-top-middle">

                  <div className="component-wrapper">
                     <Search onProductSearchSubmit={onProductSearchSubmit} />
                  </div>

               </div>

                  
               <div className="container-wrapper-top-right">

               {isAuthenticated ? 
                  <div id="heart" className="component-wrapper">
                     <div className="heart-container"> 
                        <Link to="logout" className="login-wrapper">
                           <div>
                              <p>
                                 <FontAwesomeIcon icon={faArrowRightFromBracket} className="login-logo" />
                              </p>
                              <p className="login-text">Logout</p>
                           </div>
                        </Link>
                     </div>
                  </div> : '' }
                  
                  {!isAuthenticated ? <LoginButton /> : <ProfileButton />}

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

 