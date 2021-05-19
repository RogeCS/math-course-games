import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Courses from "../containers/Courses.jsx";
import Course from "../containers/Course.jsx";
import Games from "../containers/Games.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/course" component={Course} />
      <Route path="/courses" component={Courses} />
      <Route path="/games" component={Games} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
