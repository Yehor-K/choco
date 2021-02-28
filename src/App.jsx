import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./scss/base.scss";
import Layout from "./shared/Layout";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <Router>
      <Layout>
        <Redirect from="/profile" to="/" />
        <Route exact path="/" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Layout>
    </Router>
  );
}

export default App;
