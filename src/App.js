import logo from './Libro.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">

     
      <header className="App-header">
      <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <div className="Name">Dictionary React </div>
        <br></br>
      </header>

<main>
<div>
<Dictionary defaultKeyword="Sunset"/>
<br></br>
</div>
</main>

      <footer> 
        
      <div className="copyright">© Coded by BeliMoreta
          <br></br>
        <a href="https://github.com/BeliMoreta/dictionary-react">GitHub</a>
        <br></br>
        <a href="https://www.linkedin.com/in/isabel-aguado-moreta-101a69126/">Linkedin</a>
        </div>
      </footer> 

      </div>
    </div>
  );
}

export default App;
