// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  const [itemCount, setItemCount] = useState(0);

  const addItemToCart = () => {
    setItemCount((currItemCount) => currItemCount + 1);
  };
  const removeItemFromCart = () => {
    setItemCount((currItemCount) => currItemCount - 1);
  };

  return (
    <div className="app">
      <Header itemCount={itemCount} />
      <Products addItemToCart={addItemToCart} removeItem={removeItemFromCart} />
      <Footer />
    </div>
  );
}

export default App;
