import React, { useState, useEffect } from 'react'
import { Navbar, Products } from './components';
import { commerce } from './libs/commerce';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    
    setCart(item.cart);
  }
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  console.log(cart);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Products products={products} addToCart={handleAddToCart} />
    </div>
  )
}

export default App
