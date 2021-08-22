import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddBookForm from './AddBookForm';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add Another Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AddBookForm handleCreate={this.props.handleCreate}/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    );
  }
}

export default BookFormModal;
