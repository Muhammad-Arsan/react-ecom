import React from "react";
import Product from "../../Product/Product";
import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/productActions";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Pictures</h2>
      <div className="homescreen__products">
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
