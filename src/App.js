import React from 'react';
import './App.css';
import Header from "./components/header";
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Register from './components/register/register';
import Login from './components/login/login';
import Neworder from './components/neworder/neworder';



import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

function App() {


  return (
    <Router>
      <Switch>
        <div>
          <Header/>
          {/* <Sidebar/> */}
          <Dashboard />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
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
