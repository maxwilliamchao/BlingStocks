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