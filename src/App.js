import React from 'react';
import './App.css';
import Header from "./components/header";
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Register from './components/register/register';

function App() {
  //const [data, setData] = React.useState(null);

  /* React.useEffect(() => {
    fetch("/get")
    .then(res => res.json())
    .then(data => setData(data.message));
  }, []); */

  return (
    <Router>
      <Switch>
        <div>
          <Header/>
          <Sidebar/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
