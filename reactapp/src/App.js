import logo from './logo.svg';
import './App.css';

function App() {
 const test = 22;
 const alfa = true;
  return (
    <div className="App">
      <h1>{"alperen".toUpperCase()}</h1>
      <p>Zort</p>
      <h2>{test}</h2>
      <h5>{alfa ? <p>Güneşlerr</p>
      : <p>yanlışşş</p>}</h5>
    </div>
  );
}

export default App;
