import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



class AddBookForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let status = e.target.status.value;
    let email = e.target.email.value;
    console.log(title, description, status, email);
    this.props.handleCreate({title, description, status, email});
  }

  render() {
    return (
      <>
        <Container>

          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" />
            </ Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" />
            </ Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" />
            </ Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </ Form.Group>

            <Button type="submit">
              Add Book
            </ Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default AddBookForm;
