import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SavedStockCard from './components/SavedStocks'

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path ='/search' component={Search} />
        <Route exact path = '/search' component={SavedStocks} />
      </Switch>
    </div>
  </Router>;

export default App;
