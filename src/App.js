import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather app</h1>
        <Weather city="Fredrikstad" />
      </header>
      <footer>
        Click here for
        <a href="https://github.com/zaneknn/react-weather" target="_blank">
          {" "}
          GitHub repository
        </a>
      </footer>
    </div>
  );
}

export default App;
