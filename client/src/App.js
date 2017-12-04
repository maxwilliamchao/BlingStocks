import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SavedStocks from './components/SavedStocks'
import Header from './components/Header'
import ApplicationLanding from './pages/ApplicationLanding'
import Dashboard from './pages/Dashboard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
<<<<<<< HEAD
import Signin from './components/Signin'
import Signup from './components/Signup'
=======

>>>>>>> master
const App = () =>
 
 <Router>
   <MuiThemeProvider>
<<<<<<< HEAD
    <div>
      <Switch>
        <Route exact path='/' component={ApplicationLanding}/>
        <Route exact path ='/dashboard' component={Dashboard} />
        <Route exact path ='/SignIn' component={Signin} />
        <Route exact path ='/Signup' component={Signup} />
        {/* <Route exact path = '/search' component={SavedStocks} /> */}
      </Switch>
    </div>
=======
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={ApplicationLanding}/>
          <Route exact path ='/dashboard' component={Dashboard} />
          <Route exact path = '/saved' component={SavedStocks} />
        </Switch>
      </div>
>>>>>>> master
    </MuiThemeProvider>
  </Router>


export default App;
