import { useContext } from "react";

import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../contexts/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"
import { CartItem } from "../ShoppingCart/CartItem"

import {ProductContext} from '../../contexts/ProductContext';


export function ShoppingCart({isOpen}) {
  const { closeCart, cartItems } = useShoppingCart()
  const {products } = useContext(ProductContext)

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item._id} style={{ padding: "3em 0" }}   {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find(i => i._id === cartItem.id)
                console.log(item,products[0]._id,cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}