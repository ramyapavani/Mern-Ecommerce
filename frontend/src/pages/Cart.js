import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px"
              }}
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button onClick={() => navigate("/payment")}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;