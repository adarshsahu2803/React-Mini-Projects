import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItem] = useState([])

  const product = [
    { id: uuidv4(), name: 'Product 1', price: 10 },
    { id: uuidv4(), name: 'Product 2', price: 20 },
    { id: uuidv4(), name: 'Product 3', price: 35 },
  ]

  const addToCart = (product) => {
    setCartItem([...cartItems, product])
  }

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItem(newCartItems);
  }

  return (
    <div>
      <h1>Online Store</h1>
      <div>
        {product.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
