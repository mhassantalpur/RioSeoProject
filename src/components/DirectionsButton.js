const DirectionsButton = ({truck}) => {
  const handleClick = () => {
    window.open(`https://www.google.com/maps/@${truck.latitude},${truck.longitude},17.14z`);
  }
  return (
    <button
      onClick={handleClick}
      style={{backgroundColor: "steelblue"}}
      className="btn"
    >
      Directions
    </button>
  )
}

export default DirectionsButton
