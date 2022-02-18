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

import {PanelMenu} from 'primereact/panelmenu';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

function App() {

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
    }
  ];

  return (
    <Router>
      <Switch>
        <div>
          <Header/>
          {/* <Sidebar/> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/neworder" component={Neworder} />
          <PanelMenu model={items} style={{width:'300px'}}/>
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
