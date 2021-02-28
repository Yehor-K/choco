import React from 'react'
import { NavLink, Link } from "react-router-dom";
import style from "./Header.module.scss"
import "../../scss/base.scss"

function Header() {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link to="/" className={style.logo}>Choco Harmoni</Link>
        <nav>
        <NavLink exact to="/" className={style.nav__link} activeClassName={style.selected}>
          Продукты
        </NavLink>
        <NavLink to="/contacts" className={style.nav__link} activeClassName={style.selected}>
          Контакты
        </NavLink>
        <NavLink exact to="/about" className={style.nav__link} activeClassName={style.selected}>
          О нас
        </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
