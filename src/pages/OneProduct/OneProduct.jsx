import { React, useRef, useState, useEffect } from "react";
import ChocoItem from "../../shared/ChocoItem";
import { useSelector, useDispatch } from "react-redux";
import { requestChoco } from "../../store/actions/asyncActions/asyncActions";
import "./Products.scss";
import { useTransition, animated } from "react-spring";

function Products() {
  const dispatch = useDispatch();
//   const chocos = useSelector((state) => state.store.allChoco);
  useEffect(() => {
  }, []);

  return (
    <>
      
    </>
  );
}
export default Products;
