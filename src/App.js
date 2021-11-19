import { useState, useEffect } from "react";
import TruckList from "./components/TruckList";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const getTrucks = async () => {
      const trucksFromAPI = await fetchTrucks();
      setTrucks(trucksFromAPI);
    }
    getTrucks();
  }, [])

  const fetchTrucks = async () => {
    const res = await fetch('https://my.api.mockaroo.com/locations.json?key=a45f1200');
    const data = await res.json();
    return data;
  }

  return (
    <div className="App">
      <TruckList trucks={trucks} />
    </div>
  )
}

export default App