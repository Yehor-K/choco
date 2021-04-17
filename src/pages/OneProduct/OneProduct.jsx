import { React, useRef, useState, useEffect } from "react";
import ChocoItem from "../../shared/ChocoItem";
import { useSelector, useDispatch } from "react-redux";
import { requestChoco } from "../../store/actions/asyncActions/asyncActions";
import { useTransition, animated } from "react-spring";
import { fetchOneChocos } from "../../store/services/fetchChocos";
import { useParams } from "react-router-dom";
import "./OneProduct.scss";
import { Link } from "react-router-dom";
import defpic from "../../img/def_img.png";

function Products() {
  const dispatch = useDispatch();
  const [chocolate, setChocolate] = useState();
  const { id } = useParams();
  //   const chocos = useSelector((state) => state.store.allChoco);
  const myRef = useRef();
  useEffect(() => {
    fetchOneChocos(id).then((res) => setChocolate(res));
  }, [id]);

  const transitions = useTransition(chocolate, null, {
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
    update: { opacity: 1, transform: "translate(0%, 0)" },
  });

  const defimg = (e) => {
    const target = e.target;
    target.src = defpic;
  };
  const isLoaded = (ref) => {
    const el = ref.current;
    const parentEl = el.parentElement;
    console.log(parentEl);
    if (parentEl) {
      parentEl.classList.add("loaded");
    }
  };
  console.log(transitions, "transitions");
  return (
    <div className="wrapper__content">
      <Link to={"/"} className="back-on-main">
        <span>&#10229;</span>
        <span>Вернуться назад</span>
      </Link>
      {chocolate
        ? transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              {item ? (
                <>
                  <div className="oneProduct">
                    <div className="product__img">
                      <img
                        src={item.image}
                        alt={item ? item.name : null}
                        onError={defimg}
                        ref={myRef}
                        onLoad={() => isLoaded(myRef)}
                      />
                    </div>
                    <div className="oneProduct__info">
                      <h1 className="product__name">
                        {item ? item.name : null}
                      </h1>
                      <p className="product__price">
                        {item ? item.price : null}
                        <span> грн.</span>
                      </p>
                      <p className="product__description">
                        {item ? item.description : null}
                      </p>
                      <div className="product__otherInfo">
                        <div className="table__row">
                          <p className="info__name">Состав:</p>
                          <p className="info__value">
                            {item ? item.composition : null}
                          </p>
                        </div>
                        <div className="table__row">
                          <p className="info__name">Срок годности:</p>
                          <p className="info__value">
                            {item ? item.shelfLife : null}
                          </p>
                        </div>
                        <div className="table__row">
                          <p className="info__name">Вес:</p>
                          <p className="info__value">
                            {item ? item.weight : null}
                          </p>
                        </div>
                        <div className="table__row">
                          <p className="info__name">Условия хранения:</p>
                          <p className="info__value">
                            {item ? item.storageСonditions : null}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </animated.div>
          ))
        : null}

      {/* {chocolate ? (
        <>
          <Link to={"/"} className="back-on-main">
            <span>&#10229;</span>
            <span>Вернуться назад</span>
          </Link>

          <div className="oneProduct">
            <img src={chocolate.image} alt={chocolate.name} onError={defimg} />
            <div className="oneProduct__info">
              <h1 className="product__name">{chocolate.name}</h1>
              <p className="product__price">
                {chocolate.price}
                <span> грн.</span>
              </p>
              <p className="product__description">{chocolate.description}</p>
              <div className="product__otherInfo">
                <div className="table__row">
                  <p className="info__name">Состав:</p>
                  <p className="info__value">{chocolate.composition}</p>
                </div>
                <div className="table__row">
                  <p className="info__name">Срок годности:</p>
                  <p className="info__value">{chocolate.shelfLife}</p>
                </div>
                <div className="table__row">
                  <p className="info__name">Вес:</p>
                  <p className="info__value">{chocolate.weight}</p>
                </div>
                <div className="table__row">
                  <p className="info__name">Условия хранения:</p>
                  <p className="info__value">{chocolate.storageСonditions}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null} */}
    </div>
  );
}
export default Products;
