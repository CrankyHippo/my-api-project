import logo from "./logo.svg";
import "./App.css";
import Posts from "./Posts.js";
import Countries from "./countries";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button id="fetchUserDataBtn">Fetch User Data</button>
        
        <h1>React API Practice Project</h1>
        <a
          className="App-link"
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Post Source: JSON Placeholder
        </a>
        <a
          className="App-link"
          href="https://restcountries.eu/#api-endpoints-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Countries Source: REST COUNTRIES
        </a>
      </header>
      <Posts />
      <hr></hr>
      <Countries />
    </div>
  );
}

export default App;
