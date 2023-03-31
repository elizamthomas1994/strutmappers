import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <h1>Strutmappers</h1>
      {/* </header> */}
      <nav>
        {/* <ul>
          <li>
            <a href="#">Take me home</a>
          </li>
          <li>
            <a href="#">Get to work</a>
          </li>
          <li>
            <a href="#">Toms' place</a>
          </li>
          <li>
            <a href="#">my parents</a>
          </li>
        </ul> */}
        <div className="button-group">
          <button>Take me home</button>
          <button>Get to work</button>
          <button>Toms' place</button>
          <button>my parents</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
