import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className="app-logo" src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          rel="noopener noreferrer"
          className="app-link"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
