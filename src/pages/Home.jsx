import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <h2 className="text-center">Welcome to Redux Toolkit</h2>
      <section>
        <h3 className="text-center">Products</h3>
        <Products />
      </section>
    </>
  );
};

export default Home;
