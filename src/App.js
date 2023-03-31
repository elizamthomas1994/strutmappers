import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <h1>mapStrutters</h1>
      {/* </header> */}
      <nav>
        <ul>
          <li>
            <a href="#">Take me home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="button-group">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
