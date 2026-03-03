import React from 'react';
import axios from 'axios';

const ProductCard = ({ product }) => {
  const addToCart = async () => {
    try {
      await axios.post('http://localhost:5000/api/cart', {
        productId: product._id,
        quantity: 1
      });
      alert('Added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price}</div>
        <button onClick={addToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
