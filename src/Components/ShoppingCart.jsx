/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Importing actions from CartSlice


const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  // Adicione esta verificação
  const totalAmount = cartItems && cartItems.length > 0
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>remove</button>
              </li>
            ))
          ) : (
            <p>Seu carrinho está vazio</p>
          )}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>{totalAmount > 0 ? <div>The total amount is ${totalAmount}</div> : ''}</div>
    </>
  );
};

export default ShoppingCart;
