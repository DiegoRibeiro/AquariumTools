import './App.css';
import Logo from './images/liakad_piranha.png';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		    <img src={Logo} alt="fish"/>
		    <h1>Aquarium Sizing Tool</h1>
		    <img src={Logo} alt="fish"/>
      </header>

      <Calculator />
    </div>
  );
}

export default App;
