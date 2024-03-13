import "./App.css";
import axios from "axios";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather app</h1>
        <Weather city="Fredrikstad" />
      </header>
    </div>
  );
}

export default App;
