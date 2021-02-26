import React from 'react';
import "./app.css";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailsPage from "./pages/details";
import ListingPage from "./pages/listing";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/positions" component={ListingPage} />
      <Route exact path="/positions/:id" component={DetailsPage} />
    </Switch>
  );
}

export default withRouter(App);