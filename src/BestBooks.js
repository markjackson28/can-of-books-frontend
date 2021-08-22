// Task 1 card 2: Create BestBooks.js
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import BookFormModal from './BookFormModal';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  // Task 3 card 2: Store data to state
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      // renderBooks: false,
    }
  }

  // Task 2 card 2: GET Request
  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    console.log('jwt: ', jwt);
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
      // Allow access on backend to see data
      // params: {email: this.props.auth0.user.email},
    };

    const results = await axios.get('http://localhost:3001/books', config);
    console.log(results.data);
    this.setState({
      books: results.data,
      // renderBooks: true,
    });
  }

  // L13 Task 5
  handleCreate = async (bookInfo) => {
    try {
      let response = await axios.post('http://localhost:3001/post-books', bookInfo);
      const newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook]
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Deletes Books 
  handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete-book/${id}`)
      let remainingBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: remainingBooks,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    // Mapping over book
    let carouselItem = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <Carousel.Caption>
          <h4>{book.title}</h4>
          <h5>{book.description}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    ));

    console.log(this.state);
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {isAuthenticated ?
          <button onClick={this.props.makeRequest}>Make Request to Server</button> :
          ''}
        {/* Conditional logic if books arr is > 0, display books */}
        {this.state.books.length > 0 ?
          <Container>
            <Carousel>
              {carouselItem}
            </Carousel>
          </Container>
          : ''}
        {/* <AddBookForm handleCreate={this.handleCreate} /> */}
        <Container>
          <ListGroup>
            {this.state.books.length > 0 ?
              this.state.books.map(book => (
                <ListGroup.Item key={book._id}>
                  <h3>{book.title}</h3>
                  <Button variant="outline-danger" size="sm" onClick={() => this.handleDelete(book._id)}>
                    Delete Book
                  </Button>
                </ListGroup.Item>
              ))
              : ''}
          </ListGroup>
        </Container>
        <BookFormModal handleCreate={this.handleCreate} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
        <div className="addButton">
          <Button onClick={this.handleShowModal}>Add Book</Button>
        </div>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
