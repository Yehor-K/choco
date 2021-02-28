import { React, useRef, useState, useEffect } from "react";
import ChocoItem from "../../shared/ChocoItem";
import { useSelector, useDispatch } from "react-redux";
import { requestChoco } from "../../store/reducer/reducer";


function Products() {
  const dispatch = useDispatch();
  const chocos = useSelector((state) => state.store.allChoco);
  useEffect(() => {
    dispatch(requestChoco());
  }, []);
  console.log(chocos, "то что получили в компоненте из редакса");
  return (
    <>
      <div className="wrapper">
        {chocos ? chocos.map((oneChoco) => <ChocoItem choco={oneChoco} key={oneChoco.id}/>) : null}
      </div>
    </>
  );
}
export default Products;
