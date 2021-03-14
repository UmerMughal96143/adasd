import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Modall({ showModal, closeModal, personRemoveHandler }) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => {
    setShow(false);
    closeModal();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Remove !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are u want to remove this Person ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              personRemoveHandler();
            }}
          >
           Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;
