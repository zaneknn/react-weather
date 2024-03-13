import "./App.css";
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
