import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./app.global.scss";
import { Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import Topbar from "./components/Topbar";
import { useSelector } from "react-redux";
import { RootStore } from "./store";
import Sidebar from "./components/Sidebar";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

function App() {
  const theme = useSelector((state: RootStore) => state.theme);
  return (
    <Switch>
      <ThemeProvider theme={theme.themeLight ? lightTheme : darkTheme}>
        <div className="App">
          <Header />

          <div>
            {/* <Route exact path="/dashboard" component={Topbar} /> */}

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/courses/:id" component={Course} />
          </div>

          <Route exact path="/" component={Auth} />
        </div>
      </ThemeProvider>
    </Switch>
  );
}

export default App;
