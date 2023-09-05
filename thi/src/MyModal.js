import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({ showModal, hideModal, confirm }) {


  return (

    <>
      <Modal show={showModal.show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm delete {showModal.info.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirm(showModal.info.id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default MyModal;