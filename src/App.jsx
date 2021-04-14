import React, { useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { __RouterContext } from "react-router";
import "./scss/base.scss";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import { useTransition, animated } from "react-spring";

function App() {
  const { location } = useContext(__RouterContext);
  console.log(location);
  const transitions = useTransition(location, (location) => location.pathname, {
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
  transitions.map(({ item, props, key }) =>
    console.log("transitions.map", item, props, key)
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </animated.div>
  ));
}

export default App;
