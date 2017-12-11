import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from "../../utils/API";
import UserHeader from "../UserHeader"
import Button from 'muicss/lib/react/button';
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
      this.setState({savedStocks: res.data})
      })
    .catch(err => console.log(err));

  }
  deleteStocks = (event) =>{
    var attribute = event.target.attributes.getNamedItem('data-name').value;
    console.log(attribute)
    event.preventDefault();
    var data = {attribute:attribute}
    API.removeStock(data);
  }


  render() {
    return (
        <div>
        <UserHeader />
        <span> <br /> <br /></span>
        {this.state.savedStocks.map((value,i) => (
          <div>
            <MuiThemeProvider>
              <Card key = {i}>
                <CardTitle 
                title={value.toUpperCase()}
                actAsExpander={true}
                showExpandableButton={true} 
                />
                 <CardActions>
                 <Button 
                                   variant="raised" 
                                   color = "primary"
                                   type = "onFormSubmit"
                                   data-name = {value}
                                   onClick = {this.deleteStocks}
                                   >Delete stock
                 </Button>
             </CardActions>
              </Card>
            </MuiThemeProvider>
          </div>
        ))}
        </div>  
        );
  }
}