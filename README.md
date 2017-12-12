# BlingStocks
## User Story
As a person who is interested in stocks, but has no idea where to start; BlingStocks allows beginners search for stocks and check basic data about the company.
## Synopsis
BlingStocks is an application that will allow users to select and search for a stock and add it to a watchlist.
## Motivation
Investment portfolios are complex and can be hard to keep track of, especially for beginners.  Our sandbox environment can be used to test crazy hunches, try different strategies (aggressive, diversified), or can simply used as a learning tool. We provide an easy way to research stocks.
## Technologies:
* Express.js
* Node.js
* Mongoose.js- Models
* React.js - Rendering
* Javascript- Back-End Scripting
* MongoDB- Database Management
* Material-UI: UI Rendering
## Installation
1. Clone Repo
```
git clone https://github.com/maxwilliamchao/BlingStocks.git
```
2. Install Packages
```
/BlingStocks
yarn
/BlingStocks/client
yarn
/BlingStocks/client
yarn build
```
## Visual Application Walkthrough
![BlingStocks walk-through](https://github.com/maxwilliamchao/BlingStocks.mp4)
## Code Examples
### Alpha Vantage
```
import React, {Component} from "react";
import Header from "../../components/Header"
import SearchBar from 'material-ui-search-bar'
import API from "../../utils/API";
import ResultsPanel from "../../components/ResultsPanel"
import UserHeader from "../../components/UserHeader"
class Dashboard extends Component {
    state = {
        results:[],
        dataSource: "",
        symbol:"",
        maxValue:"",
        minValue:""
    };
    componentDidMount(){
        // console.log(request.session.username);
    }
    componentWillUpdate(){
        console.log("Update",this.state.results)
    }
    handleInputChange = value =>{
       
       this.setState({
           dataSource:[value]
       });
    }
    
    handleRequestSearch = event =>{
        // 
        console.log(this.state.dataSource[0]);
        if(this.state.dataSource){
            API.getStocks({
                query:this.state.dataSource[0]
            })
            .then(res =>{
                // console.log(res.data);
                // this.setState({results:res.data})
                console.log(res.data);
                const symbol = (res.data["Meta Data"]["2. Symbol"]);
                console.log(Object.keys(res.data["Meta Data"]));
                const open = []
                const timeSeriesKeys = (Object.keys(res.data["Time Series (60min)"]))
                
                for(var i = 0; i < 10; i++){
                open.push(res.data["Time Series (60min)"][timeSeriesKeys[i]]["1. open"]);
                }
                console.log("open is : ", open);
                this.setState({results: open, symbol: symbol})
                const max = open.map(element => parseFloat(element))
                const maxValue = Math.max(...max);
                const minValue = Math.min(...max);
                console.log("the max value is",maxValue);
                this.setState({maxValue:maxValue});
                this.setState({minValue:minValue});
            })
            .catch(err => console.log(err))
        }
    }
    render() {
        return(
            <div className = "container-fluid">
                <UserHeader />
                
                <span>
                <br /> <br />  
                </span>
                <SearchBar
                    onChange ={this.handleInputChange}
                    onRequestSearch = {this.handleRequestSearch}
                    style = {{
                        margin:'0 auto',
                        maxWidth:800
                    }}/>
                    {this.state.results.length ? (
                    <ResultsPanel
                        stockData = {this.state.results}
                        symbol = {this.state.symbol}
                        maxValue = {this.state.maxValue}
                        minValue = {this.state.minValue}
                     />
                
                ):(<h1>No stocks to display</h1>)
                }
            </div>
        );
    }
}
export default Dashboard
```
### API Route
```
import axios from "axios";
export default {
    getStocks:function(data){
        const url = "https://www.alphavantage.co/query?"
        const apiKey = "Q4IXS4UBOYG17AYI"
        // function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=60min&apikey=Q4IXS4UBOYG17AYI
        console.log(data.query)
        return axios.get(url,{
           params:{
               'function':"TIME_SERIES_INTRADAY",
                'symbol':data.query,
                'interval':"60min",
                'apikey':apiKey,
           } 
        })
        .then(function(response){
            return (response);
        })
        .catch(function(error){
            console.log(error);
        });
    },
    saveUser:function(data){
        axios.post("/api/user/signup",{
            username:data.username,
            email:data.email,
            password:data.password,
            phone:data.phone
        }).then(function(res){
            console.log(res);
            if(res){
                alert("signup successful");
            }
        })
    },
    getUser:function(data){
        const username = data.username
        const password = data.password
        axios.post("/api/user/signin",{
            username:username,
            password:password
        }).then(function(res){
            console.log(res);
            if(res.data.auth){
                 
                window.location.href = "/dashboard"
            }else{
                alert("incorrect login");
            }
        })
    },
    saveStock:function(data){
        const username = "brandon"
        const ticker = data.ticker
        console.log(ticker);
        axios.post("/api/user/dashboard", {
            username:username,
            ticker:ticker
        }).then(function(res,err){
                 console.log(res);
                 if(err){console.log(err)}
                 alert("the stock has been saved to the database")
             })
    },
    
    getSavedStocks: () => {
        return axios.get('/api/user/saved').then(function(res){
            return res;
        });
      },
    // ,
      removeStock: data => {
          console.log(data)
          var attribute  = data.attribute
          return axios.put('/api/user/saved',{attribute:attribute}).then(function(res){
              if(res){
                  window.location.href = "/saved"
              }
          })
        }
};
```
## Available Node Commands and URLs
**Local:** 
* Run `node server.js` 
* Then load [http://localhost:3001/](http://localhost:3001/)
**Heroku Deployment:**
## Misc Notes
* Github master branch pushes autodeploy to Heroku (sweet).
## Authors
* **Sherwin Ameri**
* **Samuel Boediono**
* **Brandon Lee** 
* **Maxwilliam Chao**
* **Sairam Jalakam** 
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details