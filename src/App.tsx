import React from "react";
import "./App.css";
import { SimpleText } from "./components/SimpleText";
import { useCustomToggle } from "juarez-use-toggle";

function App() {
  const { isActive, setIsActive } = useCustomToggle();

  return (
    <div className="App">
      <header className="App-header">
        <SimpleText />
        <button onClick={() => setIsActive(!isActive)}>
          Is Active {`${isActive}`}{" "}
        </button>
      </header>
    </div>
  );
}

export default App;
