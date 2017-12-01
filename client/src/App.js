import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import SavedStockCard from './components/SavedStocks'
import Header from './components/Header'
import ApplicationLanding from './pages/ApplicationLanding'
import Dashboard from './pages/Dashboard'
const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ApplicationLanding}/>
        <Route exact path ='/dashboard' component={Dashboard} />
        {/* <Route exact path = '/search' component={SavedStocks} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
