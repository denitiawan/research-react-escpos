import './App.css';

import logo from './logo.svg';
import  PrinterComponent  from './printthermal/PrinterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <PrinterComponent/>     
      </header>

   
    </div>
  );
}

export default App;
