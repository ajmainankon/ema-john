import React from "react";
import "./App.css";
import Header from "./components/Header";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
