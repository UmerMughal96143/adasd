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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;
