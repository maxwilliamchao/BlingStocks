import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from "../../utils/API";


export default class SavedStocks extends Component{

  state = {
    savedStocks: [],
    delete:""
  }

  componentDidMount(){
    this.loadStocks();
  }

  loadStocks = () => {
  //this will be a call to the database to retrieve list of stocks saved in database.
  API.getSavedStocks()
    .then(res => {
      console.log('result', res.data)
      this.setState({savedStocks: res.data})
      })
    .catch(err => console.log(err));

  }
  deleteStocks = (event) =>{
    const find = event.target.attributes
    console.log(find);
    // const del = find.getNamedItem("data-value").value;
    // console.log(del);
    event.preventDefault();
    API.removeStock()
  }


  render() {
    return (
        <div>
        {this.state.savedStocks.map((value,i) => (
          <div>
            <MuiThemeProvider>
              <Card key = {i}>
                <CardTitle 
                title={value.toUpperCase()}
                actAsExpander={true}
                showExpandableButton={true} 
                />
                <CardActions > 
                  
                  <FlatButton
                  data-value = {this.value}
                  onClick = {this.deleteStocks} 
                  label="Delete From Watchlist" />
                </CardActions>
              </Card>
            </MuiThemeProvider>
          </div>
        ))}
        </div>  
        );
  }
}