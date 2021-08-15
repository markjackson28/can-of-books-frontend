import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
// import Login from './Login';
// import BestBooks from './BestBooks';
// import Profile from './Profile';
import BrowserRouter from './BrowserRouter';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    console.log('props', this.props.auth0);
    const { user, IsLoading, isAuthenticated } = this.props.auth0;
    console.log('user', user);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header isAuthenticated={isAuthenticated} />
            <BrowserRouter isAuthenticated={isAuthenticated}/>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
