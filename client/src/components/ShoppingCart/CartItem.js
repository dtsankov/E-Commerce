import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../contexts/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"
 

export function CartItem(data) {
  const { removeFromCart, cartItem } = useShoppingCart()
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const fetchedItem = await cartItem(data.id);
        setItem(fetchedItem);
      } catch (error) {
        console.error("Error fetching cart item:", error);
      }
    };

    fetchCartItem();
  }, [cartItem, data.id]);


  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center cart-item" style={{ padding: "2.5em 0", borderBottom: '1px solid #CCC'} }>
      <img
        src={item.imageUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {data.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{data.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * data.quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item._id)}
      >
        &times;
      </Button>
    </Stack>
  )
}