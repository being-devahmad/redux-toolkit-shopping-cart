import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { STATUSES, fetchProducts } from "../Store/ProductSlice";
import { Spinner } from "react-bootstrap";
import "../../src/index.css";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  // const fetchApiData = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   console.log(data);
  //   setProducts(data);
  // };

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    // fetchApiData();
  }, []);
  if (status === STATUSES.LOADING) {
    return (
      <div className="overlay">
        <div className="spinner-center">
          <Spinner animation="border" />
        </div>
      </div>
    );
  }
  if (status === STATUSES.ERROR) {
    return alert("Error");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <h3>Products</h3>
          {products.map((product) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12"
                key={product.id}
              >
                <div className="card mb-3 p-4">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      style={{ height: "250px", width: "250px" }}
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                    <p className="card-text">Rs.{product.price}</p>
                    <button
                      onClick={() => handleAdd(product)}
                      className="btn btn-dark"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
