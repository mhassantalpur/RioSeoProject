import Truck from "./Truck"

const TruckList = ({ trucks }) => {
  return (
    <div className = "truckList">
     {trucks.map((truck) => {
       return (
      <Truck key={truck.id} truck={truck}/>
       )
     })} 
    </div>
  )
}

export default TruckList
