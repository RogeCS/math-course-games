import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../containers/Home.jsx";
import Course from "../containers/Course.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/courses" component={Course} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
