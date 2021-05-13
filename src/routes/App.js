import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Course from "../containers/Course.jsx";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/course" component={Course} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
