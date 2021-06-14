import logo from './Libro.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">

     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
Dictionary React 
      </header>

<main>
<div>
<Dictionary />
</div>
</main>

      <footer> 
        
      <span className="copyright">© Coded by BeliMoreta</span>
          <br></br>
        <a href="https://github.com/BeliMoreta/my-weather-react">GitHub</a>
        <br></br>
        <a href="https://www.linkedin.com/in/isabel-aguado-moreta-101a69126/">Linkedin</a>

      </footer> 

      </div>
    </div>
  );
}

export default App;
