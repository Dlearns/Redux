// App.js
import React from "react";
import { Provider } from "react-redux";
import CounterComponent from "./CounterComponent";

function App() {
  const counterIds = Array.from(Array(5).keys()); // Create an array of 5 counter IDs

  return (
    <div className="App">
      <header className="App-header">
        {counterIds.map((id) => (
          <CounterComponent key={id} id={id} />
        ))}
      </header>
    </div>
  );
}

export default App;
