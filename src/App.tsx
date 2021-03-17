import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <h1>THIS IS A REACT APP</h1>
      <Route exact path="/login" component={Auth} />
    </div>
  );
}

export default App;
