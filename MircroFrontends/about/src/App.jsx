import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: PDP</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
