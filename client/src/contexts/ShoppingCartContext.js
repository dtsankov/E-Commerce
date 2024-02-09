import { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
import {productServiceFactory} from "../services/productService"
import { getSession } from "../session/session"

const ShoppingCartContext = createContext()

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart",[])
  const productService = productServiceFactory(getSession()?.accessToken);
  
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity,0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  async function cartItem(id){
    try {
      const result = await productService.getOne(id);
      return result;  
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;  
    }
  }

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id) {

    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  
  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        cartItem
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}