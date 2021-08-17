import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.props.isAuthenticated ? 
        <button onClick={this.props.makeRequest}>Make Request to Server</button> :
        ''}
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
