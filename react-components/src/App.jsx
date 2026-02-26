import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductCards from "./components/ProductCards";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductCards />
    </div>
  );
};

export default App;
