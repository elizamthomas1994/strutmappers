import React from "react";
import MapContainer from "./components/map/Map.jsx";
import MyNavBar from "./components/navbar/MyNavBar.jsx";
import FloatingActionButtons from "./components/navbar/FloatingActionButtons.jsx";

function App() {
  return (
    <div data-testid="map">
      <MyNavBar />
      <MapContainer />
      <FloatingActionButtons />
    </div>
  );
}

export default App;
