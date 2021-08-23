import React from 'react';
import Profile from './Profile';
import BestBooks from './BestBooks';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class BrowserRouter extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Switch>
          <Route exact path="/">
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            {isAuthenticated ? <BestBooks makeRequest={this.props.makeRequest}/> : <Login />}
          </Route >
          {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </>
    )
  }
}

export default withAuth0(BrowserRouter);
