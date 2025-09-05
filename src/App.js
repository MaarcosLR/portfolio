import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <div className="App-header" id="home">
      <Header />
      </div>
      <div className="App-body" id="about">
      <Body />
      </div>
      <div className="App-body" id="skills">
        <Body />
      </div>
      <div className="App-body" id="proyects">
        <Body />
      </div>
      <div className="App-body" id="contact">
        <Body />
      </div>
    </div>
  );
}

export default App;
