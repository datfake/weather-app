import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import Layout from "./views/Layout";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
}

export default App;
