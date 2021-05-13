import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
