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
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                />
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
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
