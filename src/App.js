import React from "react";
import MapContainer from "./components/map/Map.jsx";
import MyNavBar from "./components/navbar/MyNavBar.jsx";

function App() {
  return (
    <div data-testid="map">
      <MyNavBar />
      <MapContainer />
    </div>
  );
}

export default App;
