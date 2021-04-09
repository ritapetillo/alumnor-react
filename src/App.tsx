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
import { CourseWrapper } from "./pages/Course/course.elements";
import SidebarCourse from "./components/SidebarCourse";
import Zoommw from "./pages/Zoommw";
import CoursePublic from "./pages/CoursePublic";
import Students from "./pages/Students";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const theme = useSelector((state: RootStore) => state.theme);
  return (
    <Switch>
      <ThemeProvider theme={theme.themeLight ? lightTheme : darkTheme}>
        <div className="App">
          <Header />

          {/* <Route exact path="/dashboard" component={Topbar} /> */}
          <div className="main-content">
            <Route exact path="/" component={Home} />

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/courses" component={Courses} />

            <Route exact path="/courses/:id/:activityId" component={Course} />
            <Route exact path="/view/courses/:id/" component={CoursePublic} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/profile" component={Profile} />
          </div>
          {/* <Route exact path="/courses/:id/" component={Course} /> */}
        </div>
      </ThemeProvider>
    </Switch>
  );
}

export default App;
