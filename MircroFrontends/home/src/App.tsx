import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer";
import Header from "./components/header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: home</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
