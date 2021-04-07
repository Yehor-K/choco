import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./shared/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
