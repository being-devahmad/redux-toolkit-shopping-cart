import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../src/index.css"
import { remove } from "../Store/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  };
  return (
    <>
      <h1>Cart</h1>
      <div className=".productsWrapper">
        {products.map((product) => {
          return (
            <>
              <div className="cartCard" key={product.id}>
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button
                  className="btn btn-dark"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
