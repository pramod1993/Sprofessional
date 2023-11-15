import React, { useState } from 'react';
// import Cart from './Cart';
 import data from './data';
import { Table } from 'react-bootstrap';
import CartItem from './CartItem';

const Testing = () => {
    
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
    const removeFromCart = (index) => {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
    };
  return (
    <>
      <h2>Shopping Cart</h2>
      <Table>
      <thead>
              <tr>
                <th>PRODUCT</th>
                <th></th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
      </Table>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} onRemove={() => removeFromCart(index)} />
          ))}
        </ul>
      )}

      {/* <h1>Online Store</h1>
      <ul> 
        {data.map((product) => (
          <li key={product.id}>
          
          <div className='flex'>
            <img src={product.img} alt="" />
            <p>{product.title}</p>
            <p>{product.amount}</p>
            <p>{product.discount}</p>
        </div>
            <button className='btn' onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default Testing
