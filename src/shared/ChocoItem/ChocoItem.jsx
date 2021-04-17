import {React, useRef} from "react";
import "./ChocoItem.scss";
import { Link } from "react-router-dom";
import defpic from "../../img/def_img.png";

function ChocoItem(props) {
  const myRef = useRef();
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
  const { image, name, price, id } = props.choco;
  return (
    <div className="chocoItem">
      <Link to={`/chocolate/${id}`}>
        <div className="chocoItem__imgWrapper">
          <img
            className="chocoItem__img"
            src={image}
            alt={name}
            onError={defimg}
            ref={myRef}
            onLoad={() => isLoaded(myRef)}
          />
        </div>
      </Link>
      <div className="chocoItem__info">
        <Link to={`/chocolate/${id}`}>
          <h3 className="chocoItem__name">{name}</h3>
        </Link>
        <Link to={`/chocolate/${id}`}>
          <p className="chocoItem__price">
            {price} <span>грн.</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
export default ChocoItem;
