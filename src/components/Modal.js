import React from 'react';
import Modal from 'react-bootstrap/Modal';

function MyModal({ show, handleClose, modal }) {
  const { title, body } = modal;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
