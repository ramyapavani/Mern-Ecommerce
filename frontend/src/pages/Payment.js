import React from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate(); // ✅ THIS WAS MISSING

  return (
    <div style={{ padding: "40px" }}>
      <h1>Payment Page</h1>

      <h3>Select Payment Method</h3>

      <div style={{ marginTop: "20px" }}>
        <input type="radio" name="payment" /> UPI <br />
        <input type="radio" name="payment" /> Credit Card <br />
        <input type="radio" name="payment" /> Debit Card <br />
        <input type="radio" name="payment" /> Cash on Delivery <br />
      </div>

      <button
        onClick={() => navigate("/thankyou")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Confirm Payment
      </button>
    </div>
  );
}

export default Payment;