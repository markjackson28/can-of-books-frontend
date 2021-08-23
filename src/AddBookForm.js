import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';



class AddBookForm extends React.Component {
  // Targets Values, Creates new obj and passes to handleCreate
  handleSubmit = e => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let status = e.target.status.value;
    let email = this.props.auth0.user.email;
    console.log(title, description, status, email);
    this.props.handleCreate({title, description, status, email});
    this.props.handleCloseModal();
  }

  render() {
    return (
      <>
        <Container>

          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" required/>
            </ Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" required/>
            </ Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" placeholder="Enter status" required/>
            </ Form.Group>

            {/* <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" required/>
            </ Form.Group> */}

            <Button type="submit">
              Save Book
            </ Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default withAuth0(AddBookForm);
