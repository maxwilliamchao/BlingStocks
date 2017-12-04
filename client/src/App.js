import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SavedStocks from './components/SavedStocks'
import Header from './components/Header'
import ApplicationLanding from './pages/ApplicationLanding'
import Dashboard from './pages/Dashboard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Signin from './components/Signin'
import Signup from './components/Signup'



const App = () =>
 
 <Router>
   <MuiThemeProvider>
    <div>
      <Switch>
        <Route exact path='/' component={ApplicationLanding}/>
        <Route exact path ='/dashboard' component={Dashboard} />
        <Route exact path ='/SignIn' component={Signin} />
        <Route exact path ='/Signup' component={Signup} />
        <Route exact path = '/Saved' component={SavedStocks} />
      </Switch>
    </div>
    </MuiThemeProvider>
  </Router>


export default App;
