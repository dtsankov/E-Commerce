//React related imports
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ProductContext } from "../../contexts/ProductContext";
import { useShoppingCart } from "../../contexts/ShoppingCartContext"
import { productServiceFactory } from "../../services/productService";
import { getSession } from "../../session/session";

//Font Awesome Fonts and Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../resources/images/logo.png";
import { Button } from "react-bootstrap"

//Components imports

import { Search } from "../Search/Search";
import { LoginButton } from "./components/LoginButton";
import { ProfileButton } from "./components/ProfileButton";

//Component

const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { onSetProducts } = useContext(ProductContext);
    const { openCart, cartQuantity } = useShoppingCart()
    const productService = productServiceFactory(getSession()?.accessToken);

    const onProductSearchSubmit = async (search) => {
        const result = await productService.getSearched(search);
        onSetProducts((state) => [...result]);
        
    };

    return (
        <header className="section-top-bar">
            <div className="container">
                <section className="section-container-wrapper">
                    <div className="container-wrapper-top-left">
                        <div className="component-wrapper">
                            <div className="header-logo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container-wrapper-top-middle">
                        <div className="component-wrapper">
                            <Search
                                onProductSearchSubmit={onProductSearchSubmit}
                            />
                        </div>
                    </div>

                    <div className="container-wrapper-top-right">
                        {isAuthenticated ? (
                            <div id="heart" className="component-wrapper">
                                <div className="heart-container">
                                    <Link to="logout" className="login-wrapper">
                                        <div>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={
                                                        faArrowRightFromBracket
                                                    }
                                                    className="login-logo"
                                                />
                                            </p>
                                            <p className="login-text">Logout</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        {!isAuthenticated ? <LoginButton /> : <ProfileButton />}

                        <div id="heart" className="component-wrapper">
                            <div className="heart-container">
                                <Link to="favourites" className="login-wrapper">
                                    <div>
                                        <p>
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className="heart-logo"
                                            />
                                        </p>
                                        <p className="heart-text">Favourites</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {cartQuantity >= 0 &&(<div id="cart" className="component-wrapper">
                            <div className="cart-container">
                                <button className="login-wrapper" onClick={openCart}>
                                    <div>
                                        <p>
                                            <FontAwesomeIcon
                                                icon={faCartShopping}
                                                className="cart-logo"
                                            />
                                        </p>
                                        <p className="cart-text">
                                            Shopping Cart
                                        </p>
                                    </div>
                                </button>
                            </div>
                              <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: "6.3em",
                                right: "1.8em",
                                transform: "translate(25%, 25%)",
                            }}
                            >
                            {cartQuantity}
                            </div>
                        </div>
                        )}

                        {/* {cartQuantity >= 0 && (
                        <Button
                            onClick={openCart}
                            style={{ width: "3rem", height: "3rem", position: "relative" }}
                            variant="outline-primary"
                            className="rounded-circle"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="currentColor"
                            >
                            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                            </svg>

                            <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                            >
                            {cartQuantity}
                            </div>
                        </Button>
                        )} */}
                    </div>
                </section>
            </div>
        </header>
    );
};
export default Header;
