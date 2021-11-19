import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const MoreInfoButton = ({truck}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const viewDetails = () => {
    window.open(`${truck.url}`)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More Info
      </Button>

      <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {truck.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>{truck.address}</span>
          <br />
          <span>{truck.city}, {truck.state} {truck.postal_code}</span>
          <br />
          <br />
          <span>Monday {truck.monday_open} - {truck.monday_close}</span>
          <br />
          <span>Tuesday {truck.tuesday_open} - {truck.tuesday_close}</span>
          <br />
          <span>Wednesday {truck.wednesday_open} - {truck.wednesday_close}</span>
          <br />
          <span>Thursday {truck.thursday_open} - {truck.thursday_close}</span>
          <br />
          <span>Friday {truck.friday_open} - {truck.friday_close}</span>
          <br />
          <span>Saturday {truck.saturday_open} - {truck.saturday_close}</span>
          <br />
          <span>Sunday {truck.sunday_open} - {truck.sunday_close}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={viewDetails}>View Details</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MoreInfoButton