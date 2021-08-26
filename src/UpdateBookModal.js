import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import UpdateBookForm from './UpdateBookForm';

class UpdateBookModal extends React.Component {

  render() {
    console.log(`selectedBook: `, this.props.selectedBook)
    return (
      <>
        <Modal show={this.props.showUpdateModal} onHide={this.props.handleCloseUpdateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateBookForm handleCreate={this.props.handleCreate} handleCloseUpdateModal={this.props.handleCloseUpdateModal} selectedBook={this.props.selectedBook} handleUpdate={this.props.handleUpdate}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateBookModal;
