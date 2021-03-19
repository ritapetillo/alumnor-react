import React from "react";
import "./app.global.scss";
import { Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/login" component={Auth} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
