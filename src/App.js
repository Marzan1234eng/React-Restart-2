import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: "Marzan Hossain",
    work: "Web Developer"
  }
  let style = {
    color:"red",
    backgroundColor: "Yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>This is {person.name +". I am a "+person.work} </p>
        <p>My First React Paragraph</p>
      </header>
    </div>
  );
}

export default App;
