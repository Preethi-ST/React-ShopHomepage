import './App.css';
import { useState, useEffect } from 'react';
import ShopHighlights from './Components/ShopHighlights';
import ShopNavbar from './Components/ShopNavbar';
import ShoopingItems from './Components/ShoopingItems';
import ShopFooter from './Components/ShopFooter';

function App() {
  const [cart, setCart] = useState(0)
  return (
    <div className="App">
      <ShopNavbar cart = {cart} />
      <ShopHighlights  />
      <ShoopingItems cart = {cart}  setCart = {setCart} />
      <ShopFooter />
    </div>
  );
}

export default App;
