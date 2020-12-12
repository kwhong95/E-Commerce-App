import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Products, Cart } from './components';
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
    <Router>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/"><Products products={products} addToCart={handleAddToCart} /></Route>
        <Route exact path="/cart"><Cart cart={cart} /></Route>
      </Switch>
    </Router>
  )
}

export default App
