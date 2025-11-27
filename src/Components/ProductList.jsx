/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice'; //Action to add item to cart


// ProductList component
const ProductList = () => {
    
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  // Adicione verificação aqui também
  const totalAmount = cartItems && cartItems.length > 0 
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0) 
    : 0;

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {cartItems && cartItems.length >= 0 ? (
          products.map(product => (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)}
              >
                {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
              </button>
            </li>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
