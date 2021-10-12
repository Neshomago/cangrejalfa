import React from 'react';
import Navbar from './components/navbar';
import LoginForm from '.components/LoginForm';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/get")
    .then(res => res.json())
    .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{ !data ? "Loading..." : data }</p>
      </header>
    </div>
  );
}

export default App;
