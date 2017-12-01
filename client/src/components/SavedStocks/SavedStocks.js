import React, {Component} from 'react';
import API from '../../utils/API';
import StockData from '../StockData'

class Saved extends Component{
  state = {
    savedStocks: []
  }

componentDidMount(){
  this.loadStocks();
}

loadStocks = () => {
//this will be a call to the database to retrieve list of stocks saved in database.
API.getSavedStocks()
  .then(res => {
    console.log('result', res)
    this.setState({savedStocks: res.data})
    })
  .catch(err => console.log(err));

}

render() {
    return(
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Watchlist
            </div>
            <div className="panel-body">
              <SavedStocksCard>
              </SavedStocksCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}