import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';



class UpdateBookForm extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        _id: this.props.selectedBook._id,
        title: this.props.selectedBook.title,
        description: this.props.selectedBook.description,
        status: this.props.selectedBook.status,
        email: this.props.selectedBook.email
      }
    }

  // Targets Values, Creates new obj and passes to handleCreate
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.handleCreate({title, description, status, email});
    this.props.handleUpdate(this.state);
    this.props.handleCloseUpdateModal();
  }

  handleTitle = (e) => {
    e.preventDefault();
    this.setState ({
      title: e.target.value,
    });
  }

  handleDescription = (e) => {
    e.preventDefault();
    this.setState ({
      description: e.target.value,
    });
  }

  handleStatus = (e) => {
    e.preventDefault();
    this.setState ({
      status: e.target.value,
    });
  }

  handleEmail = (e) => {
    e.preventDefault();
    this.setState ({
      email: e.target.value,
    });
  }

  render() {
    console.log(`selectedBook: `, this.props.selectedBook)
    console.log(`selectedBook: `, this.state)
    return (
      <>
        <Container>

          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" value={this.state.title} onChange={this.handleTitle} required/>
            </ Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" value={this.state.description} onChange={this.handleDescription} required/>
            </ Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" value={this.state.status} onChange={this.handleStatus} required/>
            </ Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={this.state.email} onChange={this.handleEmail} required/>
            </ Form.Group>

            <Button type="submit">
              Save Changes
            </ Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default withAuth0(UpdateBookForm);
