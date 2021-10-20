import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginForm';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/get")
    .then(res => res.json())
    .then(data => setData(data.message));
  }, []);

  //<header className="App-header">
  //      <img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
    <LoginForm></LoginForm>     
        <p>{ !data ? "Loading..." : data }</p>
    </div>
  );
}

export default App;
