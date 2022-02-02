import React from 'react';
import './App.css';
import Header from "./components/header";
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Register from './components/register/register';
import Login from './components/login/login';
import Neworder from './components/neworder/neworder';

function App() {

  return (
    <Router>
      <Switch>
        <div>
          <Header/>
          <Sidebar/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/neworder" component={Neworder} />
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
