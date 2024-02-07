import { useContext } from "react";

import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../contexts/ShoppingCartContext"
import { ProductContext } from "../../contexts/ProductContext"
import { formatCurrency } from "../../utilities/formatCurrency"
 

export function CartItem(data) {
  const { removeFromCart } = useShoppingCart()
  const {products } = useContext(ProductContext)
    
  const item = products.filter(i => i._id === data.id)
  console.log(item[0]._id);
  
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center cart-item" style={{ padding: "2.5em 0", borderBottom: '1px solid #CCC'} }>
      <img
        src={item[0].imageUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item[0].title}{" "}
          {data.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{data.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item[0].price)}
        </div>
      </div>
      <div> {formatCurrency(item[0].price * data.quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item[0]._id)}
      >
        &times;
      </Button>
    </Stack>
  )
}