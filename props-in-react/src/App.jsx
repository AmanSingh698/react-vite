import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="parent">
      <Cards
        img="https://sm.mashable.com/t/mashable_in/photo/default/img-3224_ngeq.1248.jpg"
        name="Sachin Ramesh Tendulkar"
      />
      <Cards
        img="https://sm.mashable.com/t/mashable_in/photo/default/img-3224_ngeq.1248.jpg"
        name="Virat Kohli"
      />
    </div>
  );
};

export default App;
