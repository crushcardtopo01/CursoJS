import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import Clicker from './components/Clicker';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Clicker></Clicker>
        <MiPrimerComponente/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola mundo!!!! 🐈 
        </a>
      </header>
    </div>
  );
}

export default App;
