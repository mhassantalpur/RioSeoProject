import MoreInfoButton from "./MoreInfoButton";
import DirectionsButton from "./DirectionsButton";
import MapButton from "./MapButton";
import Card from 'react-bootstrap/Card';

const Truck = ({ truck }) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card border="primary" style={{ alignItems:'center', width: '27rem' }}>
        <Card.Body>
        <Card.Title>{truck.name}</Card.Title>
        <Card.Text>
          <span>{truck.address}</span>
          <p>{truck.city}, {truck.state} {truck.postal_code}</p>
          <p style={{color: "green"}}>open until 9pm</p>
        </Card.Text>
        </Card.Body>
        <div>
          <DirectionsButton truck={truck}/>
          <MoreInfoButton truck={truck}/>
          <MapButton truck={truck} />
        </div>
      </Card>
    </div>
  )
}


export default Truck