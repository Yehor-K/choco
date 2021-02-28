import { React, useRef, useState, useEffect, useCallback } from "react";
import ChocoItem from "../../shared/ChocoItem";
import { useSelector, useDispatch } from "react-redux";
// import { requestChoco } from "../../store/reducer/reducer";
import { requestChoco } from "../../store/actions/actionsChocos";

function Products() {
  const dispatch = useDispatch();
  const chocos = useSelector((state) => state.store.allChoco);
  useEffect(() => {
    dispatch(requestChoco());
  }, [chocos]);
  console.log(chocos);

  return (
    <>
      <div className="wrapper">
        {chocos
          ? chocos.map((oneChoco) => (
              <ChocoItem choco={oneChoco} key={oneChoco.id} />
            ))
          : null}
      </div>
    </>
  );
}
export default Products;
