import React from "react";
import style from "./ChocoItem.module.scss";
import { Link } from "react-router-dom";

function ChocoItem(props) {
  const { image, name, price, id } = props.choco;
  return (
    <div className={style.chocoItem}>
      <Link to={`/chocolate/${id}`}>
        <img className={style.chocoItem__img} src={image} alt={name} />
      </Link>
      <div className={style.chocoItem__info}>
      <Link to={`/chocolate/${id}`}>
        <h3 className={style.chocoItem__name}>{name}</h3>
      </Link>
      <Link to={`/chocolate/${id}`}>
        <p className={style.chocoItem__price}>
          {price} <span>грн.</span>
        </p>
      </Link>
      </div>
    </div>
  );
}
export default ChocoItem;
