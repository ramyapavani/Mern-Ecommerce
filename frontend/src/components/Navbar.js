import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">MERN Shop</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart 🛒 ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;