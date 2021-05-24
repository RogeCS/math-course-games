import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Courses from "../containers/Courses.jsx";
import Course from "../containers/Course.jsx";
import Course1 from "../containers/Course1-1.jsx";
import Games from "../containers/Games.jsx";
import InDev from "../containers/InDev.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/in-development" component={InDev} />
      <Route path="/course1-1" component={Course1} />
      <Route path="/course" component={Course} />
      <Route path="/courses" component={Courses} />
      <Route path="/games" component={Games} />
      <Route path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default App;
