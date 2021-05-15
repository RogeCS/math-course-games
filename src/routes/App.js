import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../containers/Home.jsx";
import Courses from "../containers/Courses.jsx";
import Games from "../containers/Games.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/courses" component={Courses} />
        <Route path="/games" component={Games} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
