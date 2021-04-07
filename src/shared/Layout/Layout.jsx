import React from "react";
import "./layout.scss";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../../pages/Products/Products";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";

function Layout(props) {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
