import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const MapButton = ({truck}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //marker for map from truckapi lat and lng
  const marker = [truck.latitude, truck.longitude];

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Show Map
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
            {truck.name} Location
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MapContainer style={{height: '180px'}} center={marker} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={marker}>
              <Popup>
                <span>{truck.address}</span>
                <br />
                <span>{truck.city}, {truck.state}</span>
              </Popup>
            </Marker>
          </MapContainer>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MapButton
