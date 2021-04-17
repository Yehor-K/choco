import { React, useRef, useState, useEffect } from "react";
import ChocoItem from "../../shared/ChocoItem";
import { useSelector, useDispatch } from "react-redux";
import { requestChoco } from "../../store/actions/asyncActions/asyncActions";
import "./Products.scss";
import { useTransition, animated } from "react-spring";

function Products() {
  const dispatch = useDispatch();
  const chocos = useSelector((state) => state.store.allChoco);
  useEffect(() => {
    dispatch(requestChoco());
  }, []);

  const transitions = useTransition(chocos, (choco) => choco.id, {
    from: {
      opacity: 0,
      transform: "translate(0, 50%)",
    },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: {
      opacity: 0,
      transform: "translate(0, 50%)",
      display: "none",
    },
  });


  return (
    <>
      <div className="wrapper__content">
        <h1 className="title">Продукция</h1>
        <div className="products">
          {transitions
            ? transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                  <ChocoItem choco={item} key={key} />
                </animated.div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
export default Products;
