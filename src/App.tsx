import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default withRouter(App);