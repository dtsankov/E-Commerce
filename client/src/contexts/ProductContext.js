/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { toast } from "react-toastify";

import { productServiceFactory } from "../services/productService";
import { getSession, setCartSession } from "../session/session";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(getSession()?.cart || []);
    const productService = productServiceFactory(getSession()?.accessToken); //auth.accessToken

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const onCreateProductSubmit = async (data) => {
        const { userId, ...productData } = data;

        const newProduct = await productService.create(productData, userId);

        setProducts((state) => [...state, newProduct]);

        toast.success("Product created successfully");

        navigate("/");
    };

    const onProductEditSubmit = async (values) => {
        const result = await productService.edit(values._id, values);

        setProducts((state) =>
            state.map((x) => (x._id === values._id ? result : x))
        );

        toast.success("Product edited successfully");

        navigate(`/catalog/${values._id}`);
    };

    const onAddProductToCart = async (productId) => {
        const productInCart = cart.find((x) => x.product._id === productId);

        const currentProduct = products.find((x) => x._id === productId);

        if (productInCart) {
            setCart((state) =>
                state.map((x) =>
                    x.product._id === productId
                        ? { ...x, quantity: x.quantity + 1 }
                        : x
                )
            );
        } else {
            setCart((state) => [
                ...state,
                {
                    product: currentProduct,
                    quantity: productInCart ? productInCart.quantity + 1 : 1,
                },
            ]);
        }
        setCartSession(cart);
        toast.success("Product added successfully to cart.");
    };

    const onSetProducts = (value) => {
        setProducts(value);
    };

    const productContextValue = {
        onCreateProductSubmit,
        onProductEditSubmit,
        products,
        onSetProducts,
        cart,
        onAddProductToCart,
    };
    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    );
};
