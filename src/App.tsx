import React from "react";
import "./app.global.scss";
import { Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
  
      <Route exact path="/login" component={Auth} />
    </div>
  );
}

export default App;
