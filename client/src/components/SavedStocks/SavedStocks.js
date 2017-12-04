<<<<<<< HEAD
// import React, {Component} from 'react';
// import API from '../../utils/API';
// import StockData from '../StockData'

// class Saved extends Component{
//   state = {
//     savedStocks: []
//   }

// componentDidMount(){
//   this.loadStocks();
// }

// loadStocks = () => {
// //this will be a call to the database to retrieve list of stocks saved in database.
// API.getSavedStocks()
//   .then(res => {
//     console.log('result', res)
//     this.setState({savedStocks: res.data})
//     })
//   .catch(err => console.log(err));

// }

// render() {
//     return(
//       <div>
//         <div className="container">
//           <div className="panel panel-primary">
//             <div className="panel-heading">
//               Watchlist
//             </div>
//             <div className="panel-body">
//               <SavedStocksCard>
//               </SavedStocksCard>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from "../../utils/API";


export default class SavedStocks extends Component{

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
    return (
          <div>
            <MuiThemeProvider>
              <Card>
                <CardTitle 
                title="Stock Name" 
                subtitle="Stock Symbol"
                actAsExpander={true}
                showExpandableButton={true} 
                />
                <CardMedia>
                </CardMedia>
                <CardText expandable= {true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="View Info" />
                  <FlatButton label="Delete From Watchlist" />
                </CardActions>
              </Card>
            </MuiThemeProvider>
          </div>
        );
  }
}
>>>>>>> master
