import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card text-bg-dark text-black border-0">
        <img src="/assets/top.jpg" className="card-img" alt="backgrond" height="390px"/>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
