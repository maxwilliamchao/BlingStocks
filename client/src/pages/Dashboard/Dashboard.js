import React, {Component} from "react";
import Header from "../../components/Header"
import SearchBar from 'material-ui-search-bar'
import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        results:[],
        dataSource: ""
    };
    handleInputChange = value =>{
       
       this.setState({
           dataSource:[value]
       });
    };

    handleRequestSearch = event =>{
        // 
        console.log(this.state.dataSource[0]);
        if(this.state.dataSource){
            API.getStocks({
                query:this.state.dataSource[0]
            })
            .then(res =>{
                console.log(res.data);
                console.log(res.data["Meta Data"]["2. Symbol"]);
                console.log(Object.keys(res.data["Meta Data"]));

                const timeSeriesKeys = (Object.keys(res.data["Time Series (60min)"])) 
                for(var i = 0; i < 10; i++){
                console.log(res.data["Time Series (60min)"][timeSeriesKeys[i]]["1. open"]);
                }
            })
            .catch(err => console.log(err))
        }
    }
    render() {
        return(
            <div className = "mui-container-fluid">
                <Header />
                <span><br/><br/><br/><br/><br/><br/><br/></span>
                <SearchBar
                    onChange ={this.handleInputChange}
                    onRequestSearch = {this.handleRequestSearch}
                    style = {{
                        margin:'0 auto',
                        maxWidth:800
                    }}/>
            </div>
        );
    }
}
export default Dashboard