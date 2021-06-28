import logo from './Libro.png';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <strong> <a href="https://github.com/BeliMoreta/dictionary-react">GitHub</a></strong>
        <br></br>
        <strong><a href="https://www.linkedin.com/in/isabel-aguado-moreta-101a69126/">Linkedin</a></strong>
        </div>
      </footer> 
      <br></br>
      </div>
    </div>
  );
}

export default App;
