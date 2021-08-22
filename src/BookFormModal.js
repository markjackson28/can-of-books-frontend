import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import AddBookForm from './AddBookForm';

class BookFormModal extends React.Component {

  render() {
    return (
      <>
        {/* L13 Task 6 Modal */}
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Another Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AddBookForm handleCreate={this.props.handleCreate} />
          </Modal.Body>

          {/* <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" onSubmit={this.handleSubmit}>Save changes</Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
